import { useState, useMemo } from "react";
import {
  Layers,
  Plus,
  Edit2,
  Trash2,
  CheckCircle,
  XCircle,
  Loader2,
  Sparkles,
} from "lucide-react";
import {
  useGetAllSectionsQuery,
  useCreateSectionMutation,
  useUpdateSectionMutation,
  useDeleteSectionMutation,
  AboutSection,
  DepartmentType,
} from "../../redux";
import { Button } from "../../components/ui/button";
import { Input, Textarea } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Card } from "../../components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../../components/ui/dialog";

const SECTION_TYPES: { value: DepartmentType; label: string }[] = [
  { value: "DIRECTOR_BODIES", label: "Director Bodies / Executive Leadership" },
  { value: "MARCHENDISER_TEAM", label: "Merchandiser Team" },
  { value: "ADMIN_AND_FINANCE", label: "Admin & Finance" },
  { value: "CREATIVE_DESIGN_AND_DEVELOPMENT", label: "Creative Design & Development" },
  { value: "OTHERS", label: "Special Advisors & Others" },
];

export function SectionManagement() {
  const { data: sectionsResponse, isLoading, refetch } = useGetAllSectionsQuery();
  const [createSection, { isLoading: isCreating }] = useCreateSectionMutation();
  const [updateSection, { isLoading: isUpdating }] = useUpdateSectionMutation();
  const [deleteSection, { isLoading: isDeleting }] = useDeleteSectionMutation();

  // Modals state
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingSection, setEditingSection] = useState<AboutSection | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Form state
  const [formType, setFormType] = useState<DepartmentType>("DIRECTOR_BODIES");
  const [formTitle, setFormTitle] = useState("");
  const [formSubtitle, setFormSubtitle] = useState("");
  const [formOrder, setFormOrder] = useState<number>(1);
  const [formIsActive, setFormIsActive] = useState(true);

  const sections = useMemo(() => {
    const list = sectionsResponse?.data || [];
    return [...list].sort((a, b) => {
      const orderA = typeof a.order === "number" ? a.order : 999999;
      const orderB = typeof b.order === "number" ? b.order : 999999;
      return orderA - orderB;
    });
  }, [sectionsResponse]);

  const resetForm = () => {
    setFormType("DIRECTOR_BODIES");
    setFormTitle("");
    setFormSubtitle("");
    setFormOrder(1);
    setFormIsActive(true);
  };

  const handleOpenAdd = () => {
    resetForm();
    setIsAddOpen(true);
  };

  const handleOpenEdit = (section: AboutSection) => {
    setEditingSection(section);
    setFormType(section.type);
    setFormTitle(section.title);
    setFormSubtitle(section.subtitle || "");
    setFormOrder(section.order ?? 1);
    setFormIsActive(section.isActive ?? true);
  };

  const handleSaveAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createSection({
        type: formType,
        title: formTitle,
        subtitle: formSubtitle,
        order: Number(formOrder),
        isActive: formIsActive,
      }).unwrap();
      setIsAddOpen(false);
      resetForm();
      refetch();
    } catch (err) {
      console.error("Create section failed:", err);
    }
  };

  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSection) return;
    const sectionId = editingSection.id || editingSection._id;
    if (!sectionId) return;

    try {
      await updateSection({
        id: sectionId,
        data: {
          type: formType,
          title: formTitle,
          subtitle: formSubtitle,
          order: Number(formOrder),
          isActive: formIsActive,
        },
      }).unwrap();
      setEditingSection(null);
      resetForm();
      refetch();
    } catch (err) {
      console.error("Update section failed:", err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteSection(id).unwrap();
      setDeletingId(null);
      refetch();
    } catch (err) {
      console.error("Delete section failed:", err);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[0.25em] text-[#dfb277] uppercase font-bold px-2.5 py-0.5 rounded-full bg-[#dfb277]/10 border border-[#dfb277]/20">
              <Layers className="h-3 w-3" />
              PORTFOLIO ARCHITECTURE
            </span>
            <span className="text-[11px] font-mono text-zinc-500">
              ({sections.length} Active {sections.length === 1 ? "Section" : "Sections"})
            </span>
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl text-white font-light tracking-tight">
            Department Sections
          </h2>
          <p className="text-xs text-zinc-400 font-light mt-1 max-w-xl">
            Configure dynamic department section headings, narrative introductions, and display sequencing on the public website.
          </p>
        </div>

        <Button
          onClick={handleOpenAdd}
          className="bg-gradient-to-r from-[#dfb277] to-[#c79b5b] hover:from-[#e5bd85] hover:to-[#dfb277] text-black font-semibold tracking-wide shadow-[0_0_25px_rgba(223,178,119,0.3)] transition-all duration-300"
        >
          <Plus className="h-4 w-4 mr-1.5 stroke-[2.5]" />
          <span>Create Section</span>
        </Button>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-24 rounded-2xl border border-dashed border-white/10 bg-[#030712]/40 backdrop-blur-md">
          <div className="relative">
            <div className="h-12 w-12 rounded-full border-2 border-[#dfb277]/20 border-t-[#dfb277] animate-spin" />
            <Sparkles className="h-4 w-4 text-[#dfb277] absolute inset-0 m-auto" />
          </div>
          <p className="text-xs font-mono text-[#dfb277] mt-4 uppercase tracking-widest font-semibold">Synchronizing Sections</p>
          <p className="text-[11px] text-zinc-500 font-mono mt-1">Fetching structural taxonomies...</p>
        </div>
      ) : sections.length === 0 ? (
        <div className="p-16 text-center rounded-3xl border border-dashed border-white/15 bg-gradient-to-b from-[#0a0f19]/40 to-[#030712]/70 backdrop-blur-xl relative overflow-hidden">
          <div className="h-16 w-16 rounded-2xl bg-[#dfb277]/10 border border-[#dfb277]/30 flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(223,178,119,0.15)]">
            <Layers className="h-8 w-8 text-[#dfb277]" />
          </div>
          <h3 className="font-editorial text-2xl text-white font-light">No Custom Sections Found</h3>
          <p className="text-xs text-zinc-400 max-w-md mx-auto mt-2 mb-6 font-light leading-relaxed">
            Create custom department sections to control public display ordering, custom headlines, and introductory narratives.
          </p>
          <Button
            onClick={handleOpenAdd}
            className="bg-gradient-to-r from-[#dfb277] to-[#c79b5b] text-black font-semibold shadow-[0_0_20px_rgba(223,178,119,0.3)]"
          >
            <Plus className="h-4 w-4 mr-1.5" />
            Add First Section
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, idx) => {
            const sectionId = section.id || section._id || "";
            return (
              <Card
                key={sectionId}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] hover:border-[#dfb277]/50 bg-gradient-to-b from-[#0a0f19]/90 to-[#03060f]/95 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(223,178,119,0.14)]"
              >
                {/* Ambient top glowing line */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb277]/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                <div className="p-6">
                  {/* Top Bar: Category + Order Pill + Live Beacon */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="inline-flex items-center text-[10px] font-mono tracking-wider font-semibold uppercase px-2.5 py-1 rounded-lg bg-[#dfb277]/10 text-[#dfb277] border border-[#dfb277]/25 truncate max-w-[180px]">
                      {section.type.replace(/_/g, " ")}
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-semibold text-[#dfb277] bg-white/[0.04] border border-white/[0.08] px-2.5 py-0.5 rounded-full shadow-inner">
                        Index #{String(section.order ?? idx + 1).padStart(2, "0")}
                      </span>
                      {section.isActive !== false ? (
                        <span className="relative flex h-2 w-2" title="Section Active">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                        </span>
                      ) : (
                        <span className="h-2 w-2 rounded-full bg-rose-400/80" title="Section Inactive" />
                      )}
                    </div>
                  </div>

                  {/* Section Title */}
                  <h3 className="font-editorial text-2xl text-white font-light group-hover:text-[#dfb277] transition-colors tracking-tight leading-snug mb-3">
                    {section.title}
                  </h3>

                  {/* Section Subtitle */}
                  {section.subtitle ? (
                    <div className="border-l-2 border-[#dfb277]/30 pl-3.5 italic text-zinc-300 font-light text-xs leading-relaxed line-clamp-3 my-2">
                      "{section.subtitle}"
                    </div>
                  ) : (
                    <div className="text-xs font-mono text-zinc-500 italic">
                      No introductory narrative configured.
                    </div>
                  )}
                </div>

                {/* Card Action Footer */}
                <div className="p-3.5 px-6 border-t border-white/[0.06] bg-white/[0.01] flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    {section.isActive !== false ? "● Visible in Menu" : "○ Draft / Hidden"}
                  </span>

                  <div className="flex items-center gap-1.5">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleOpenEdit(section)}
                      className="h-8 px-3 rounded-xl border border-white/10 text-xs font-mono text-zinc-300 hover:text-white hover:border-[#dfb277]/40 hover:bg-[#dfb277]/10 transition-all"
                    >
                      <Edit2 className="h-3 w-3 mr-1 text-[#dfb277]" />
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => setDeletingId(sectionId)}
                      className="h-8 w-8 p-0 rounded-xl flex items-center justify-center"
                      title="Delete Section"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {/* ========================================== */}
      {/* Modal: ADD SECTION                         */}
      {/* ========================================== */}
      <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Create Department Section</DialogTitle>
            <DialogDescription>
              Configure section heading, category taxonomy, and introductory narrative for the public portfolio.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSaveAdd} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Department Category Type *
              </label>
              <select
                value={formType}
                onChange={(e) => setFormType(e.target.value as DepartmentType)}
                className="w-full h-11 rounded-xl border border-white/10 bg-[#030712] px-3.5 text-sm text-white focus:outline-none focus:border-[#dfb277] focus:ring-1 focus:ring-[#dfb277]/30"
              >
                {SECTION_TYPES.map((t) => (
                  <option key={t.value} value={t.value} className="bg-[#030712]">
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Section Title *
              </label>
              <Input
                required
                placeholder="e.g. Executive Board & Director Bodies"
                value={formTitle}
                onChange={(e) => setFormTitle(e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Section Subtitle / Narrative
              </label>
              <Textarea
                placeholder="Brief narrative explaining this division's mandate and capabilities..."
                value={formSubtitle}
                onChange={(e) => setFormSubtitle(e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Display Order Priority
              </label>
              <Input
                type="number"
                min={1}
                value={formOrder}
                onChange={(e) => setFormOrder(Number(e.target.value))}
              />
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="secIsActive"
                checked={formIsActive}
                onChange={(e) => setFormIsActive(e.target.checked)}
                className="h-4 w-4 rounded accent-[#dfb277]"
              />
              <label htmlFor="secIsActive" className="text-xs font-mono text-zinc-300">
                Section is active and visible to public visitors
              </label>
            </div>

            <DialogFooter>
              <Button type="button" variant="ghost" onClick={() => setIsAddOpen(false)} className="text-zinc-400 hover:text-white">
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isCreating}
                className="bg-gradient-to-r from-[#dfb277] to-[#c79b5b] hover:from-[#e5bd85] hover:to-[#dfb277] text-black font-semibold shadow-[0_0_20px_rgba(223,178,119,0.3)] px-6"
              >
                {isCreating ? "Saving Section..." : "Create Section"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* ========================================== */}
      {/* Modal: EDIT SECTION                        */}
      {/* ========================================== */}
      <Dialog open={Boolean(editingSection)} onOpenChange={(open) => !open && setEditingSection(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Edit Section Details</DialogTitle>
            <DialogDescription>
              Update title, subtitle narrative, or display ordering.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSaveEdit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Department Category Type *
              </label>
              <select
                value={formType}
                onChange={(e) => setFormType(e.target.value as DepartmentType)}
                className="w-full h-11 rounded-xl border border-white/10 bg-[#030712] px-3.5 text-sm text-white focus:outline-none focus:border-[#dfb277] focus:ring-1 focus:ring-[#dfb277]/30"
              >
                {SECTION_TYPES.map((t) => (
                  <option key={t.value} value={t.value} className="bg-[#030712]">
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Section Title *
              </label>
              <Input
                required
                value={formTitle}
                onChange={(e) => setFormTitle(e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Section Subtitle
              </label>
              <Textarea
                value={formSubtitle}
                onChange={(e) => setFormSubtitle(e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Display Order Priority
              </label>
              <Input
                type="number"
                min={1}
                value={formOrder}
                onChange={(e) => setFormOrder(Number(e.target.value))}
              />
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="secEditIsActive"
                checked={formIsActive}
                onChange={(e) => setFormIsActive(e.target.checked)}
                className="h-4 w-4 rounded accent-[#dfb277]"
              />
              <label htmlFor="secEditIsActive" className="text-xs font-mono text-zinc-300">
                Active on public site
              </label>
            </div>

            <DialogFooter>
              <Button type="button" variant="ghost" onClick={() => setEditingSection(null)} className="text-zinc-400 hover:text-white">
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isUpdating}
                className="bg-gradient-to-r from-[#dfb277] to-[#c79b5b] hover:from-[#e5bd85] hover:to-[#dfb277] text-black font-semibold shadow-[0_0_20px_rgba(223,178,119,0.3)] px-6"
              >
                {isUpdating ? "Saving..." : "Save Changes"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* ========================================== */}
      {/* Modal: DELETE CONFIRMATION                 */}
      {/* ========================================== */}
      <Dialog open={Boolean(deletingId)} onOpenChange={(open) => !open && setDeletingId(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-red-400">Delete Section</DialogTitle>
            <DialogDescription>
              Are you sure you want to remove this section? Team members assigned to this category will no longer be grouped under this section.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button variant="ghost" onClick={() => setDeletingId(null)} className="text-zinc-400 hover:text-white">
              Cancel
            </Button>
            <Button
              variant="danger"
              disabled={isDeleting}
              onClick={() => deletingId && handleDelete(deletingId)}
            >
              {isDeleting ? "Deleting..." : "Confirm Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

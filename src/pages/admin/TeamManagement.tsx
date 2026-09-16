import { useState, useMemo } from "react";
import {
  Users,
  Plus,
  Search,
  Edit2,
  Trash2,
  Upload,
  ExternalLink,
  CheckCircle,
  XCircle,
  Loader2,
  User as UserIcon,
  Mail,
  Phone,
  Sparkles,
  Linkedin,
  Twitter,
  AlertCircle,
} from "lucide-react";
import {
  useGetAllTeamMembersQuery,
  useCreateTeamMemberMutation,
  useUpdateTeamMemberMutation,
  useDeleteTeamMemberMutation,
  useUploadSingleImageMutation,
  BackendTeamMember,
  DepartmentType,
  CreateTeamMemberPayload,
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
import { MemberImageUploader } from "./MemberImageUploader";

const DEPARTMENTS: { value: DepartmentType; label: string }[] = [
  { value: "DIRECTOR_BODIES", label: "Executive / Director Bodies" },
  { value: "MARCHENDISER_TEAM", label: "Merchandiser Team" },
  { value: "ADMIN_AND_FINANCE", label: "Admin & Finance" },
  { value: "CREATIVE_DESIGN_AND_DEVELOPMENT", label: "Creative Design & Development" },
  { value: "OTHERS", label: "Special Advisors & Others" },
];

const DEPT_ORDER: Record<string, number> = {
  DIRECTOR_BODIES: 1,
  MARCHENDISER_TEAM: 2,
  ADMIN_AND_FINANCE: 3,
  CREATIVE_DESIGN_AND_DEVELOPMENT: 4,
  OTHERS: 5,
};

export function TeamManagement() {
  const [selectedDept, setSelectedDept] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  // Queries & Mutations
  const { data: membersResponse, isLoading, refetch } = useGetAllTeamMembersQuery(
    selectedDept !== "ALL" ? { type: selectedDept } : undefined
  );
  const [createMember, { isLoading: isCreating }] = useCreateTeamMemberMutation();
  const [updateMember, { isLoading: isUpdating }] = useUpdateTeamMemberMutation();
  const [deleteMember, { isLoading: isDeleting }] = useDeleteTeamMemberMutation();
  const [uploadImage, { isLoading: isUploading }] = useUploadSingleImageMutation();

  // Modals state
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<BackendTeamMember | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Form Feedback
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);

  // Form State (Only 4 fields are required: Name, Designation, Type, Order)
  const [formName, setFormName] = useState("");
  const [formDesignation, setFormDesignation] = useState("");
  const [formType, setFormType] = useState<DepartmentType>("DIRECTOR_BODIES");
  const [formOrder, setFormOrder] = useState<number>(1);
  const [formBio, setFormBio] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formImage, setFormImage] = useState("");
  const [formLinkedin, setFormLinkedin] = useState("");
  const [formTwitter, setFormTwitter] = useState("");
  const [formIsActive, setFormIsActive] = useState(true);

  // Filter members locally by search & sort by Department first, then Display Order ascending (1 first, 2 second...)
  const members = useMemo(() => {
    const list = membersResponse?.data || [];
    let filtered = list;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = list.filter(
        (m) =>
          (m.name || "").toLowerCase().includes(q) ||
          (m.designation || "").toLowerCase().includes(q) ||
          (m.type || "").toLowerCase().includes(q)
      );
    }
    return [...filtered].sort((a, b) => {
      // 1. When viewing all departments, group by company department hierarchy
      if (selectedDept === "ALL") {
        const deptA = DEPT_ORDER[a.type] ?? 99;
        const deptB = DEPT_ORDER[b.type] ?? 99;
        if (deptA !== deptB) return deptA - deptB;
      }
      // 2. Within each department, sort strictly by display order ascending (1, 2, 3...)
      const orderA = typeof a.order === "number" ? a.order : 999999;
      const orderB = typeof b.order === "number" ? b.order : 999999;
      if (orderA !== orderB) return orderA - orderB;
      return (a.name || "").localeCompare(b.name || "");
    });
  }, [membersResponse, searchQuery, selectedDept]);

  const resetForm = () => {
    setFormError(null);
    setFormSuccess(null);
    setFormName("");
    setFormDesignation("");
    setFormType("DIRECTOR_BODIES");
    setFormOrder(1);
    setFormBio("");
    setFormEmail("");
    setFormPhone("");
    setFormImage("");
    setFormLinkedin("");
    setFormTwitter("");
    setFormIsActive(true);
  };

  const handleOpenAdd = () => {
    resetForm();
    setIsAddOpen(true);
  };

  const handleOpenEdit = (member: BackendTeamMember) => {
    setEditingMember(member);
    setFormName(member.name || "");
    setFormDesignation(member.designation || "");
    setFormType(member.type || "DIRECTOR_BODIES");
    setFormOrder(member.order ?? 1);
    setFormBio(member.bio ?? "");
    setFormEmail(member.email ?? "");
    setFormPhone(member.phone ?? "");
    setFormImage(member.image ?? "");
    setFormLinkedin(member.socialLinks?.linkedin ?? "");
    setFormTwitter(member.socialLinks?.twitter ?? "");
    setFormIsActive(member.isActive ?? true);
  };

  const handleImageFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("image", file);
      try {
        const res = await uploadImage(formData).unwrap();
        if (res?.data?.url) {
          setFormImage(res.data.url);
        }
      } catch (err) {
        console.error("Image upload failed:", err);
      }
    }
  };

  const handleSaveAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(null);

    if (!formName.trim()) {
      setFormError("Full Name is required.");
      return;
    }
    if (!formDesignation.trim()) {
      setFormError("Designation is required.");
      return;
    }

    // Build payload with ONLY the 4 required fields by default.
    // Optional fields are only attached if non-empty to prevent validation errors on backend.
    const payload: CreateTeamMemberPayload = {
      name: formName.trim(),
      designation: formDesignation.trim(),
      type: formType,
      order: Number(formOrder) || 1,
      isActive: formIsActive,
    };

    if (formBio.trim()) payload.bio = formBio.trim();
    if (formEmail.trim()) payload.email = formEmail.trim();
    if (formPhone.trim()) payload.phone = formPhone.trim();
    if (formImage.trim()) payload.image = formImage.trim();

    const socialLinks: Record<string, string> = {};
    if (formLinkedin.trim()) socialLinks.linkedin = formLinkedin.trim();
    if (formTwitter.trim()) socialLinks.twitter = formTwitter.trim();
    if (Object.keys(socialLinks).length > 0) {
      payload.socialLinks = socialLinks;
    }

    try {
      await createMember(payload).unwrap();
      setFormSuccess(`Team member "${formName}" created successfully!`);
      refetch();
      setTimeout(() => {
        setIsAddOpen(false);
        resetForm();
      }, 700);
    } catch (err: any) {
      console.error("Create member failed:", err);
      const errMsg =
        err?.data?.message ||
        (Array.isArray(err?.data?.error)
          ? err.data.error.map((e: any) => `${e.path}: ${e.message}`).join(", ")
          : err?.error || "Failed to create team member. Please check required fields.");
      setFormError(errMsg);
    }
  };

  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(null);
    if (!editingMember) return;
    const memberId = editingMember.id || editingMember._id;
    if (!memberId) return;

    if (!formName.trim()) {
      setFormError("Full Name is required.");
      return;
    }
    if (!formDesignation.trim()) {
      setFormError("Designation is required.");
      return;
    }

    const payload: Partial<CreateTeamMemberPayload> = {
      name: formName.trim(),
      designation: formDesignation.trim(),
      type: formType,
      order: Number(formOrder) || 1,
      isActive: formIsActive,
    };

    if (formBio.trim()) payload.bio = formBio.trim();
    if (formEmail.trim()) payload.email = formEmail.trim();
    if (formPhone.trim()) payload.phone = formPhone.trim();
    if (formImage.trim()) payload.image = formImage.trim();

    const socialLinks: Record<string, string> = {};
    if (formLinkedin.trim()) socialLinks.linkedin = formLinkedin.trim();
    if (formTwitter.trim()) socialLinks.twitter = formTwitter.trim();
    if (Object.keys(socialLinks).length > 0) {
      payload.socialLinks = socialLinks;
    }

    try {
      await updateMember({
        id: memberId,
        data: payload as any,
      }).unwrap();
      setFormSuccess(`Team member "${formName}" updated successfully!`);
      refetch();
      setTimeout(() => {
        setEditingMember(null);
        resetForm();
      }, 700);
    } catch (err: any) {
      console.error("Update member failed:", err);
      const errMsg =
        err?.data?.message ||
        (Array.isArray(err?.data?.error)
          ? err.data.error.map((e: any) => `${e.path}: ${e.message}`).join(", ")
          : err?.error || "Failed to update team member.");
      setFormError(errMsg);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteMember(id).unwrap();
      setDeletingId(null);
      refetch();
    } catch (err) {
      console.error("Delete member failed:", err);
    }
  };

  const getInitials = (name: string) => {
    if (!name) return "LE";
    const parts = name.trim().split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <div className="space-y-8">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[0.25em] text-[#dfb277] uppercase font-bold px-2.5 py-0.5 rounded-full bg-[#dfb277]/10 border border-[#dfb277]/20">
              <Users className="h-3 w-3" />
              EXECUTIVE REPOSITORY
            </span>
            <span className="text-[11px] font-mono text-zinc-500">
              ({members.length} {members.length === 1 ? "Profile" : "Profiles"} Loaded)
            </span>
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl text-white font-light tracking-tight">
            Team Members Directory
          </h2>
          <p className="text-xs text-zinc-400 font-light mt-1 max-w-xl">
            Manage executive leadership, merchandisers, and designers appearing across public portfolio sections.
          </p>
        </div>

        <Button
          onClick={handleOpenAdd}
          className="bg-gradient-to-r from-[#dfb277] to-[#c79b5b] hover:from-[#e5bd85] hover:to-[#dfb277] text-black font-semibold tracking-wide shadow-[0_0_25px_rgba(223,178,119,0.3)] transition-all duration-300"
        >
          <Plus className="h-4 w-4 mr-1.5 stroke-[2.5]" />
          <span>Add New Member</span>
        </Button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Department Filters */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#030712]/90 border border-white/[0.08] backdrop-blur-xl shadow-inner">
          <button
            onClick={() => setSelectedDept("ALL")}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
              selectedDept === "ALL"
                ? "bg-gradient-to-r from-[#dfb277] to-[#c79b5b] text-black font-bold shadow-[0_0_15px_rgba(223,178,119,0.3)]"
                : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
            }`}
          >
            <span>All Departments</span>
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                selectedDept === "ALL" ? "bg-black/20 text-black font-bold" : "bg-white/10 text-zinc-400"
              }`}
            >
              {members.length}
            </span>
          </button>
          {DEPARTMENTS.map((dept) => {
            const isSelected = selectedDept === dept.value;
            return (
              <button
                key={dept.value}
                onClick={() => setSelectedDept(dept.value)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                  isSelected
                    ? "bg-gradient-to-r from-[#dfb277] to-[#c79b5b] text-black font-bold shadow-[0_0_15px_rgba(223,178,119,0.3)]"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {dept.label.split("/")[0].trim()}
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-[#dfb277]/70" />
          <Input
            placeholder="Search by name, role, dept..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-11 bg-[#030712]/90 border-white/10 focus:border-[#dfb277] focus:ring-1 focus:ring-[#dfb277]/30 text-xs rounded-xl shadow-inner placeholder:text-zinc-500"
          />
        </div>
      </div>

      {/* Members Grid / List */}
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-24 rounded-2xl border border-dashed border-white/10 bg-[#030712]/40 backdrop-blur-md">
          <div className="relative">
            <div className="h-12 w-12 rounded-full border-2 border-[#dfb277]/20 border-t-[#dfb277] animate-spin" />
            <Sparkles className="h-4 w-4 text-[#dfb277] absolute inset-0 m-auto" />
          </div>
          <p className="text-xs font-mono text-[#dfb277] mt-4 uppercase tracking-widest font-semibold">Synchronizing with Backend</p>
          <p className="text-[11px] text-zinc-500 font-mono mt-1">Retrieving verified personnel records...</p>
        </div>
      ) : members.length === 0 ? (
        <div className="p-16 text-center rounded-3xl border border-dashed border-white/15 bg-gradient-to-b from-[#0a0f19]/40 to-[#030712]/70 backdrop-blur-xl relative overflow-hidden">
          <div className="h-16 w-16 rounded-2xl bg-[#dfb277]/10 border border-[#dfb277]/30 flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(223,178,119,0.15)]">
            <Users className="h-8 w-8 text-[#dfb277]" />
          </div>
          <h3 className="font-editorial text-2xl text-white font-light">No Team Members Found</h3>
          <p className="text-xs text-zinc-400 max-w-md mx-auto mt-2 mb-6 font-light leading-relaxed">
            {searchQuery
              ? `No personnel profiles match the search query "${searchQuery}". Try clearing the search filter.`
              : "No members have been created for this department yet. Add the first executive or team member below."}
          </p>
          <Button
            onClick={handleOpenAdd}
            className="bg-gradient-to-r from-[#dfb277] to-[#c79b5b] text-black font-semibold shadow-[0_0_20px_rgba(223,178,119,0.3)]"
          >
            <Plus className="h-4 w-4 mr-1.5" />
            Add First Member
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((member) => {
            const memberId = member.id || member._id || "";
            return (
              <Card
                key={memberId || member.name}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] hover:border-[#dfb277]/50 bg-gradient-to-b from-[#0a0f19]/90 to-[#03060f]/95 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(223,178,119,0.14)]"
              >
                {/* Ambient top glowing line */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfb277]/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                <div className="p-6">
                  {/* Top Header: Dept Badge + Order + Status */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="inline-flex items-center text-[10px] font-mono tracking-wider font-semibold uppercase px-2.5 py-1 rounded-lg bg-[#dfb277]/10 text-[#dfb277] border border-[#dfb277]/25 truncate max-w-[150px]">
                      {member.type.replace(/_/g, " ")}
                    </span>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] font-mono text-zinc-400 bg-white/[0.04] border border-white/[0.08] px-2 py-0.5 rounded-md">
                        #{member.order ?? 1}
                      </span>
                      {member.isActive !== false ? (
                        <span className="relative flex h-2 w-2" title="Active">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                        </span>
                      ) : (
                        <span className="h-2 w-2 rounded-full bg-rose-400/80" title="Inactive" />
                      )}
                    </div>
                  </div>

                  {/* Avatar & Identity Hero */}
                  <div className="flex items-start gap-4 mb-5">
                    {/* Portrait Photo with Luxury Border */}
                    <div className="relative shrink-0">
                      <div className="h-18 w-18 rounded-2xl p-0.5 bg-gradient-to-b from-[#dfb277]/40 via-white/10 to-white/5 border border-[#dfb277]/30 shadow-[0_0_20px_rgba(223,178,119,0.15)] group-hover:border-[#dfb277] transition-all overflow-hidden">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="h-full w-full object-cover rounded-[14px] group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="h-full w-full rounded-[14px] bg-[#0c121e] flex flex-col items-center justify-center">
                            <span className="font-editorial text-lg font-light text-[#dfb277] tracking-wider">
                              {getInitials(member.name)}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="min-w-0 flex-1 pt-0.5">
                      <h4 className="font-editorial text-xl text-white font-light truncate group-hover:text-[#dfb277] transition-colors tracking-tight">
                        {member.name}
                      </h4>
                      <p className="text-xs text-[#dfb277] font-mono truncate mt-1 tracking-wide font-medium">
                        {member.designation}
                      </p>
                      <div className="flex items-center gap-1.5 mt-2">
                        {member.socialLinks?.linkedin && (
                          <a
                            href={member.socialLinks.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="h-6 w-6 rounded-md bg-white/[0.04] hover:bg-[#dfb277]/20 border border-white/10 hover:border-[#dfb277]/50 flex items-center justify-center text-zinc-400 hover:text-[#dfb277] transition-all"
                            title="LinkedIn Profile"
                          >
                            <Linkedin className="h-3 w-3" />
                          </a>
                        )}
                        {member.socialLinks?.twitter && (
                          <a
                            href={member.socialLinks.twitter}
                            target="_blank"
                            rel="noreferrer"
                            className="h-6 w-6 rounded-md bg-white/[0.04] hover:bg-[#dfb277]/20 border border-white/10 hover:border-[#dfb277]/50 flex items-center justify-center text-zinc-400 hover:text-[#dfb277] transition-all"
                            title="Twitter Profile"
                          >
                            <Twitter className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bio snippet */}
                  {member.bio && (
                    <div className="my-3 pl-3 border-l border-[#dfb277]/30 text-xs text-zinc-400 font-light line-clamp-2 italic leading-relaxed">
                      "{member.bio}"
                    </div>
                  )}

                  {/* Contact tags */}
                  <div className="space-y-1.5 pt-2 text-[11px] font-mono text-zinc-400">
                    {member.email && (
                      <div className="flex items-center gap-2 truncate px-2.5 py-1 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                        <Mail className="h-3 w-3 text-[#dfb277]/70 shrink-0" />
                        <span className="truncate">{member.email}</span>
                      </div>
                    )}
                    {member.phone && (
                      <div className="flex items-center gap-2 truncate px-2.5 py-1 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                        <Phone className="h-3 w-3 text-[#dfb277]/70 shrink-0" />
                        <span className="truncate">{member.phone}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="p-3.5 px-6 border-t border-white/[0.06] bg-white/[0.01] flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    {member.isActive !== false ? "Publicly Visible" : "Hidden / Inactive"}
                  </span>

                  <div className="flex items-center gap-1.5">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleOpenEdit(member)}
                      className="h-8 px-3 rounded-xl border border-white/10 text-xs font-mono text-zinc-300 hover:text-white hover:border-[#dfb277]/40 hover:bg-[#dfb277]/10 transition-all"
                    >
                      <Edit2 className="h-3 w-3 mr-1 text-[#dfb277]" />
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => setDeletingId(memberId)}
                      className="h-8 w-8 p-0 rounded-xl flex items-center justify-center"
                      title="Delete Member"
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
      {/* Modal: ADD MEMBER                          */}
      {/* ========================================== */}
      <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>Add New Team Member</DialogTitle>
            <DialogDescription>
              Provide 4 primary details to create a member. All other fields are optional.
            </DialogDescription>
          </DialogHeader>

          {formError && (
            <div className="flex items-start gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs text-red-300">
              <AlertCircle className="h-4 w-4 shrink-0 text-red-400 mt-0.5" />
              <span>{formError}</span>
            </div>
          )}
          {formSuccess && (
            <div className="flex items-start gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-xs text-emerald-300">
              <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
              <span>{formSuccess}</span>
            </div>
          )}

          <form onSubmit={handleSaveAdd} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Full Name *
                </label>
                <Input
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Designation *
                </label>
                <Input
                  required
                  placeholder="e.g. Lead Designer"
                  value={formDesignation}
                  onChange={(e) => setFormDesignation(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Department Type *
                </label>
                <select
                  value={formType}
                  onChange={(e) => setFormType(e.target.value as DepartmentType)}
                  className="w-full h-11 rounded-xl border border-white/10 bg-[#030712] px-3 text-sm text-white focus:outline-none focus:border-[#dfb277]"
                >
                  {DEPARTMENTS.map((d) => (
                    <option key={d.value} value={d.value} className="bg-[#030712]">
                      {d.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Display Order
                </label>
                <Input
                  type="number"
                  min={1}
                  value={formOrder}
                  onChange={(e) => setFormOrder(Number(e.target.value))}
                />
                <span className="text-[10px] font-mono text-zinc-500 block">
                  Controls appearance sequence (1 appears first, 2 second, etc.).
                </span>
              </div>
            </div>

            {/* Cloudinary Photo Uploader */}
            <MemberImageUploader
              value={formImage}
              onChange={setFormImage}
              disabled={isCreating}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="alex@lunareclipse.com"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Phone Number
                </label>
                <Input
                  placeholder="+880 1234 567890"
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  LinkedIn Profile URL
                </label>
                <Input
                  placeholder="https://linkedin.com/in/username"
                  value={formLinkedin}
                  onChange={(e) => setFormLinkedin(e.target.value)}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Twitter Profile URL
                </label>
                <Input
                  placeholder="https://twitter.com/username"
                  value={formTwitter}
                  onChange={(e) => setFormTwitter(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Short Bio / Background
              </label>
              <Textarea
                placeholder="Professional background, expertise, or key responsibilities..."
                value={formBio}
                onChange={(e) => setFormBio(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="formIsActive"
                checked={formIsActive}
                onChange={(e) => setFormIsActive(e.target.checked)}
                className="h-4 w-4 rounded accent-[#dfb277]"
              />
              <label htmlFor="formIsActive" className="text-xs font-mono text-zinc-300">
                Visible and active on public portfolio
              </label>
            </div>

            <DialogFooter>
              <Button type="button" variant="ghost" onClick={() => setIsAddOpen(false)} className="text-zinc-400 hover:text-white">
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isCreating || isUploading}
                className="bg-gradient-to-r from-[#dfb277] to-[#c79b5b] hover:from-[#e5bd85] hover:to-[#dfb277] text-black font-semibold shadow-[0_0_20px_rgba(223,178,119,0.3)] px-6"
              >
                {isCreating ? "Saving Profile..." : "Create Member"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* ========================================== */}
      {/* Modal: EDIT MEMBER                         */}
      {/* ========================================== */}
      <Dialog open={Boolean(editingMember)} onOpenChange={(open) => !open && setEditingMember(null)}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>Edit Team Member</DialogTitle>
            <DialogDescription>
              Update member details, sequence position, or profile photo.
            </DialogDescription>
          </DialogHeader>

          {formError && (
            <div className="flex items-start gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs text-red-300">
              <AlertCircle className="h-4 w-4 shrink-0 text-red-400 mt-0.5" />
              <span>{formError}</span>
            </div>
          )}
          {formSuccess && (
            <div className="flex items-start gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-xs text-emerald-300">
              <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
              <span>{formSuccess}</span>
            </div>
          )}

          <form onSubmit={handleSaveEdit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Full Name *
                </label>
                <Input
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Designation *
                </label>
                <Input
                  required
                  value={formDesignation}
                  onChange={(e) => setFormDesignation(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Department Type *
                </label>
                <select
                  value={formType}
                  onChange={(e) => setFormType(e.target.value as DepartmentType)}
                  className="w-full h-11 rounded-xl border border-white/10 bg-[#030712] px-3 text-sm text-white focus:outline-none focus:border-[#dfb277]"
                >
                  {DEPARTMENTS.map((d) => (
                    <option key={d.value} value={d.value} className="bg-[#030712]">
                      {d.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Display Order
                </label>
                <Input
                  type="number"
                  min={1}
                  value={formOrder}
                  onChange={(e) => setFormOrder(Number(e.target.value))}
                />
                <span className="text-[10px] font-mono text-zinc-500 block">
                  Controls appearance sequence (1 appears first, 2 second, etc.).
                </span>
              </div>
            </div>

            {/* Photo Uploader */}
            <MemberImageUploader
              value={formImage}
              onChange={setFormImage}
              disabled={isUpdating}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Email Address
                </label>
                <Input
                  type="email"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Phone Number
                </label>
                <Input
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Short Bio
              </label>
              <Textarea
                value={formBio}
                onChange={(e) => setFormBio(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="editIsActive"
                checked={formIsActive}
                onChange={(e) => setFormIsActive(e.target.checked)}
                className="h-4 w-4 rounded accent-[#dfb277]"
              />
              <label htmlFor="editIsActive" className="text-xs font-mono text-zinc-300">
                Active on public site
              </label>
            </div>

            <DialogFooter>
              <Button type="button" variant="ghost" onClick={() => setEditingMember(null)} className="text-zinc-400 hover:text-white">
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isUpdating || isUploading}
                className="bg-gradient-to-r from-[#dfb277] to-[#c79b5b] hover:from-[#e5bd85] hover:to-[#dfb277] text-black font-semibold shadow-[0_0_20px_rgba(223,178,119,0.3)] px-6"
              >
                {isUpdating ? "Saving Profile..." : "Update Member"}
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
            <DialogTitle className="text-red-400">Confirm Member Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this team member? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button variant="ghost" onClick={() => setDeletingId(null)}>
              Cancel
            </Button>
            <Button
              variant="danger"
              disabled={isDeleting}
              onClick={() => deletingId && handleDelete(deletingId)}
            >
              {isDeleting ? "Deleting..." : "Delete Permanently"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

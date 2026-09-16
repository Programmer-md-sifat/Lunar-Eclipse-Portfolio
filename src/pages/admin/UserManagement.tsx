import { useState, useMemo } from "react";
import { Users, Search, Trash2, Shield, Loader2, UserCheck, ShieldAlert, Sparkles, Mail, Phone, UserPlus, AlertCircle, CheckCircle2 } from "lucide-react";
import { useGetAllUsersQuery, useDeleteUserMutation, useRegisterUserMutation } from "../../redux";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
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

export function UserManagement() {
  const [search, setSearch] = useState("");
  const { data: usersResponse, isLoading, refetch } = useGetAllUsersQuery();
  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();
  const [registerUser, { isLoading: isCreatingAdmin }] = useRegisterUserMutation();

  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Add Admin modal state
  const [isAddAdminOpen, setIsAddAdminOpen] = useState(false);
  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminPhone, setAdminPhone] = useState("");
  const [adminCountry, setAdminCountry] = useState("Bangladesh");
  const [adminRole, setAdminRole] = useState("ADMIN");
  const [adminError, setAdminError] = useState<string | null>(null);
  const [adminSuccess, setAdminSuccess] = useState<string | null>(null);

  const users = useMemo(() => {
    const list = usersResponse?.data || [];
    if (!search.trim()) return list;
    const q = search.toLowerCase();
    return list.filter(
      (u) =>
        (u.name || "").toLowerCase().includes(q) ||
        (u.email || "").toLowerCase().includes(q) ||
        (u.phone && u.phone.includes(q))
    );
  }, [usersResponse, search]);

  const stats = useMemo(() => {
    const all = usersResponse?.data || [];
    const admins = all.filter((u) => u.role === "ADMIN" || u.role === "SUPER_ADMIN").length;
    const active = all.filter((u) => u.userStatus === "ACTIVE" || (u as any).status === "ACTIVE").length;
    return { total: all.length, admins, active };
  }, [usersResponse]);

  const handleDelete = async (id: string) => {
    try {
      await deleteUser(id).unwrap();
      setDeletingId(null);
      refetch();
    } catch (err) {
      console.error("Delete user failed:", err);
    }
  };

  const handleCreateAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAdminError(null);
    setAdminSuccess(null);

    if (adminPassword.length < 6) {
      setAdminError("Password must be at least 6 characters long.");
      return;
    }

    try {
      await registerUser({
        name: adminName,
        email: adminEmail,
        password: adminPassword,
        phone: adminPhone,
        country: adminCountry,
        role: adminRole,
      }).unwrap();

      setAdminSuccess(`Administrator "${adminName}" provisioned successfully!`);
      setAdminName("");
      setAdminEmail("");
      setAdminPassword("");
      setAdminPhone("");
      refetch();

      setTimeout(() => {
        setIsAddAdminOpen(false);
        setAdminSuccess(null);
      }, 1200);
    } catch (err: any) {
      console.error("Create administrator failed:", err);
      setAdminError(
        err?.data?.message || err?.error || "Failed to create administrator account. Email may already be registered."
      );
    }
  };

  const getInitials = (name: string) => {
    if (!name) return "US";
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
              <Shield className="h-3 w-3" />
              GOVERNANCE & SECURITY
            </span>
            <span className="text-[11px] font-mono text-zinc-500">
              ({stats.total} Total Registered Accounts)
            </span>
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl text-white font-light tracking-tight">
            User Accounts & Permissions
          </h2>
          <p className="text-xs text-zinc-400 font-light mt-1 max-w-xl">
            Audit registered enterprise credentials, access roles, and provision new administrative team accounts.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-[#dfb277]/70" />
            <Input
              placeholder="Search by name, email, phone..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 h-11 bg-[#030712]/90 border-white/10 focus:border-[#dfb277] focus:ring-1 focus:ring-[#dfb277]/30 text-xs rounded-xl shadow-inner placeholder:text-zinc-500"
            />
          </div>

          <Button
            onClick={() => {
              setAdminError(null);
              setAdminSuccess(null);
              setIsAddAdminOpen(true);
            }}
            className="bg-gradient-to-r from-[#dfb277] to-[#c79b5b] hover:from-[#e5bd85] hover:to-[#dfb277] text-black font-semibold tracking-wide shadow-[0_0_25px_rgba(223,178,119,0.3)] transition-all duration-300 shrink-0 h-11 px-5"
          >
            <UserPlus className="h-4 w-4 mr-1.5 stroke-[2.5]" />
            <span>Add Administrator</span>
          </Button>
        </div>
      </div>

      {/* Quick Metrics Ribbon */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#0a0f19]/80 to-[#03060f]/90 p-5 backdrop-blur-xl relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#dfb277]/30 to-transparent" />
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Total Users</span>
            <Users className="h-4 w-4 text-[#dfb277]" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-editorial text-3xl text-white font-light">{stats.total}</span>
            <span className="text-[11px] font-mono text-zinc-500">Registered</span>
          </div>
        </div>

        <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#0a0f19]/80 to-[#03060f]/90 p-5 backdrop-blur-xl relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#dfb277]/30 to-transparent" />
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Administrators</span>
            <ShieldAlert className="h-4 w-4 text-[#dfb277]" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-editorial text-3xl text-[#dfb277] font-light">{stats.admins}</span>
            <span className="text-[11px] font-mono text-zinc-500">Privileged</span>
          </div>
        </div>

        <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#0a0f19]/80 to-[#03060f]/90 p-5 backdrop-blur-xl relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#dfb277]/30 to-transparent" />
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Active Status</span>
            <UserCheck className="h-4 w-4 text-emerald-400" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-editorial text-3xl text-emerald-400 font-light">{stats.active}</span>
            <span className="text-[11px] font-mono text-zinc-500">Verified</span>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-24 rounded-2xl border border-dashed border-white/10 bg-[#030712]/40 backdrop-blur-md">
          <div className="relative">
            <div className="h-12 w-12 rounded-full border-2 border-[#dfb277]/20 border-t-[#dfb277] animate-spin" />
            <Sparkles className="h-4 w-4 text-[#dfb277] absolute inset-0 m-auto" />
          </div>
          <p className="text-xs font-mono text-[#dfb277] mt-4 uppercase tracking-widest font-semibold">Loading User Credentials</p>
          <p className="text-[11px] text-zinc-500 font-mono mt-1">Checking authentication permissions...</p>
        </div>
      ) : users.length === 0 ? (
        <div className="p-16 text-center rounded-3xl border border-dashed border-white/15 bg-gradient-to-b from-[#0a0f19]/40 to-[#030712]/70 backdrop-blur-xl">
          <Users className="h-10 w-10 text-zinc-600 mx-auto mb-3" />
          <h3 className="font-editorial text-2xl text-white font-light">No Users Found</h3>
          <p className="text-xs text-zinc-400 max-w-sm mx-auto mt-2 font-light leading-relaxed">
            No registered platform accounts match your current query.
          </p>
        </div>
      ) : (
        <Card className="overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#0a0f19]/90 to-[#03060f]/95 backdrop-blur-xl shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.03] text-[10px] font-mono uppercase tracking-[0.18em] text-[#dfb277] font-semibold">
                  <th className="py-4 pl-6">Personnel / User</th>
                  <th className="py-4 px-4">Role & Access</th>
                  <th className="py-4 px-4">Direct Contact</th>
                  <th className="py-4 px-4">Region</th>
                  <th className="py-4 px-4">Account Status</th>
                  <th className="py-4 pr-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05] text-xs">
                {users.map((u) => {
                  const userId = u.id || u._id || "";
                  const isAdmin = u.role === "ADMIN" || u.role === "SUPER_ADMIN";
                  return (
                    <tr
                      key={userId}
                      className="hover:bg-white/[0.03] transition-colors group"
                    >
                      {/* User Column */}
                      <td className="py-4 pl-6">
                        <div className="flex items-center gap-3.5">
                          <div className="h-10 w-10 rounded-xl bg-gradient-to-b from-[#dfb277]/20 to-white/5 border border-[#dfb277]/30 flex items-center justify-center shrink-0 shadow-inner group-hover:border-[#dfb277] transition-colors">
                            <span className="font-editorial text-sm font-light text-[#dfb277]">
                              {getInitials(u.name)}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium text-white text-sm group-hover:text-[#dfb277] transition-colors tracking-tight">
                              {u.name || "Unnamed User"}
                            </div>
                            <div className="text-zinc-400 font-mono text-[11px] mt-0.5">
                              {u.email}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Role Column */}
                      <td className="py-4 px-4">
                        <div className="flex flex-col gap-1">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold uppercase tracking-wider w-fit ${
                              isAdmin
                                ? "bg-[#dfb277]/15 text-[#dfb277] border border-[#dfb277]/30 shadow-[0_0_12px_rgba(223,178,119,0.15)]"
                                : "bg-white/[0.04] text-zinc-300 border border-white/10"
                            }`}
                          >
                            <Shield className="h-3 w-3" />
                            {u.role || "USER"}
                          </span>
                          <span className="text-[10px] font-mono text-zinc-500">
                            {isAdmin ? "Portal: Authorized" : "Portal: Access Denied"}
                          </span>
                        </div>
                      </td>

                      {/* Contact Info */}
                      <td className="py-4 px-4 font-mono text-zinc-300">
                        {u.phone ? (
                          <span className="flex items-center gap-1.5 text-[11px]">
                            <Phone className="h-3 w-3 text-[#dfb277]/70" />
                            {u.phone}
                          </span>
                        ) : (
                          <span className="text-zinc-600">—</span>
                        )}
                      </td>

                      {/* Country */}
                      <td className="py-4 px-4 text-zinc-300 font-mono text-[11px]">
                        {u.country || "Global / Unset"}
                      </td>

                      {/* Status */}
                      <td className="py-4 px-4">
                        {u.userStatus === "ACTIVE" || (u as any).status === "ACTIVE" ? (
                          <span className="inline-flex items-center gap-1.5 text-emerald-400 font-mono text-[11px] font-semibold">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                            </span>
                            Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-rose-400 font-mono text-[11px]">
                            <span className="h-2 w-2 rounded-full bg-rose-400" />
                            Inactive
                          </span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="py-4 pr-6 text-right">
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => setDeletingId(userId)}
                          className="h-8 w-8 p-0 rounded-xl flex items-center justify-center"
                          title="Revoke and Delete Account"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* ========================================== */}
      {/* Modal: ADD ADMINISTRATOR                   */}
      {/* ========================================== */}
      <Dialog open={isAddAdminOpen} onOpenChange={setIsAddAdminOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[0.25em] text-[#dfb277] uppercase font-bold px-2.5 py-0.5 rounded-full bg-[#dfb277]/10 border border-[#dfb277]/20 w-fit mb-1">
              <Shield className="h-3 w-3" />
              PRIVILEGED PROVISIONING
            </div>
            <DialogTitle>Provision Administrator</DialogTitle>
            <DialogDescription>
              Register a new administrative authority with elevated dashboard permissions.
            </DialogDescription>
          </DialogHeader>

          {adminError && (
            <div className="flex items-start gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs text-red-300">
              <AlertCircle className="h-4 w-4 shrink-0 text-red-400 mt-0.5" />
              <span>{adminError}</span>
            </div>
          )}

          {adminSuccess && (
            <div className="flex items-start gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-xs text-emerald-300">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
              <span>{adminSuccess}</span>
            </div>
          )}

          <form onSubmit={handleCreateAdmin} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium">
                  Full Name *
                </label>
                <Input
                  required
                  placeholder="e.g. Marcus Vance"
                  value={adminName}
                  onChange={(e) => setAdminName(e.target.value)}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium">
                  Email Address *
                </label>
                <Input
                  type="email"
                  required
                  placeholder="admin.name@lunareclipse.com"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium">
                  Initial Password *
                </label>
                <Input
                  type="password"
                  required
                  placeholder="Min 6 characters"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium">
                  Administrative Role *
                </label>
                <select
                  value={adminRole}
                  onChange={(e) => setAdminRole(e.target.value)}
                  className="w-full h-11 rounded-xl border border-white/10 bg-[#030712] px-3 text-sm text-white focus:outline-none focus:border-[#dfb277] focus:ring-1 focus:ring-[#dfb277]/30 font-mono text-xs"
                >
                  <option value="ADMIN" className="bg-[#030712]">ADMIN — Executive Administrator</option>
                  <option value="SUPER_ADMIN" className="bg-[#030712]">SUPER_ADMIN — Master Governance</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium">
                  Contact Phone
                </label>
                <Input
                  placeholder="+880 1234 567890"
                  value={adminPhone}
                  onChange={(e) => setAdminPhone(e.target.value)}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium">
                  Country / Region
                </label>
                <Input
                  placeholder="e.g. Bangladesh"
                  value={adminCountry}
                  onChange={(e) => setAdminCountry(e.target.value)}
                />
              </div>
            </div>

            <DialogFooter>
              <Button type="button" variant="ghost" onClick={() => setIsAddAdminOpen(false)} className="text-zinc-400 hover:text-white">
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isCreatingAdmin}
                className="bg-gradient-to-r from-[#dfb277] to-[#c79b5b] hover:from-[#e5bd85] hover:to-[#dfb277] text-black font-semibold shadow-[0_0_20px_rgba(223,178,119,0.3)] px-6"
              >
                {isCreatingAdmin ? "Provisioning..." : "Create Administrator"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete User Modal */}
      <Dialog open={Boolean(deletingId)} onOpenChange={(open) => !open && setDeletingId(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-red-400">Revoke User Access</DialogTitle>
            <DialogDescription>
              Are you sure you want to permanently delete this user account? Their credentials and sessions will be invalidated immediately.
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
              {isDeleting ? "Revoking..." : "Permanently Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

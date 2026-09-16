import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Users,
  Layers,
  UserCheck,
  Activity,
  LogOut,
  ArrowLeft,
  Sparkles,
  KeyRound,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import {
  useAppSelector,
  useAppDispatch,
  logout,
  useGetAllTeamMembersQuery,
  useGetAllSectionsQuery,
  useGetAllUsersQuery,
  useChangePasswordMutation,
} from "../../redux";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../../components/ui/dialog";
import { AdminLogin } from "./AdminLogin";
import { TeamManagement } from "./TeamManagement";
import { SectionManagement } from "./SectionManagement";
import { UserManagement } from "./UserManagement";
import { ActivityManagement } from "./ActivityManagement";

type AdminTab = "team" | "sections" | "users" | "activity";

export function AdminDashboard() {
  const dispatch = useAppDispatch();
  const { isAuthenticated, user, token } = useAppSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState<AdminTab>("team");

  // Change Password state
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pwdError, setPwdError] = useState<string | null>(null);
  const [pwdSuccess, setPwdSuccess] = useState<string | null>(null);
  const [changePassword, { isLoading: isChangingPassword }] = useChangePasswordMutation();

  // Metrics
  const { data: membersData } = useGetAllTeamMembersQuery();
  const { data: sectionsData } = useGetAllSectionsQuery();
  const { data: usersData } = useGetAllUsersQuery();

  // Handle Change Password Submit
  const handleChangePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPwdError(null);
    setPwdSuccess(null);

    if (newPassword.length < 6) {
      setPwdError("New password must be at least 6 characters long.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPwdError("New passwords do not match. Please re-enter.");
      return;
    }

    try {
      await changePassword({ oldPassword, newPassword }).unwrap();
      setPwdSuccess("Password updated successfully!");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setIsChangePasswordOpen(false);
        setPwdSuccess(null);
      }, 1400);
    } catch (err: any) {
      console.error("Change password failed:", err);
      setPwdError(
        err?.data?.message || err?.error || "Failed to change password. Please verify your current password."
      );
    }
  };

  const isPrivilegedAdmin = user?.role === "ADMIN" || user?.role === "SUPER_ADMIN";

  // If not authenticated, show sleek Admin Login
  if (!isAuthenticated && !token) {
    return <AdminLogin />;
  }

  // If authenticated but account role is not ADMIN or SUPER_ADMIN
  if (!isPrivilegedAdmin) {
    return (
      <div className="relative min-h-screen bg-[#020509] text-white flex flex-col justify-center items-center px-4 py-12 selection:bg-[#dfb277]/30 selection:text-white overflow-hidden">
        {/* Ambient background lighting */}
        <div className="pointer-events-none absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-red-600/[0.06] blur-[220px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-red-900/[0.04] blur-[220px]" />

        {/* Return to Portfolio Link */}
        <div className="absolute top-6 left-6 z-20">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-[#dfb277] transition-colors bg-white/[0.02] border border-white/[0.08] px-4 py-2 rounded-xl backdrop-blur-md hover:border-[#dfb277]/40"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>

        <div className="relative z-10 w-full max-w-md">
          <Card className="relative overflow-hidden border border-red-500/30 bg-gradient-to-b from-[#14090a]/95 to-[#050304]/98 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-red-500/50 before:to-transparent">
            <CardHeader className="text-center pb-4 pt-8">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 shadow-[0_0_30px_rgba(239,68,68,0.25)]">
                <AlertCircle className="h-8 w-8" />
              </div>

              <div className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[0.25em] text-red-400 uppercase font-bold px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mx-auto mb-2">
                ACCESS RESTRICTED
              </div>

              <CardTitle className="font-editorial text-3xl text-white font-light tracking-tight">
                Privileged Access Required
              </CardTitle>

              <CardDescription className="mt-2 text-xs text-zinc-400 font-light max-w-xs mx-auto leading-relaxed">
                You are currently signed in with an account that has role{" "}
                <Badge variant="outline" className="text-red-300 border-red-500/40 bg-red-500/15 font-mono ml-1">
                  {user?.role || "USER"}
                </Badge>
                . The Executive Portal is strictly restricted to <span className="text-white font-semibold">ADMIN</span> and <span className="text-white font-semibold">SUPER_ADMIN</span> accounts only.
              </CardDescription>
            </CardHeader>

            <CardContent className="px-6 sm:px-8 pb-8 space-y-3">
              <Button
                type="button"
                onClick={() => dispatch(logout())}
                className="w-full h-11 bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 text-red-200 text-xs font-mono uppercase tracking-wider transition-all"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out & Switch Account
              </Button>

              <Link to="/" className="block">
                <Button
                  type="button"
                  variant="ghost"
                  className="w-full text-xs font-mono text-zinc-400 hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Return to Public Portfolio
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    dispatch(logout());
  };

  const totalMembers = membersData?.data?.length ?? 0;
  const totalSections = sectionsData?.data?.length ?? 0;
  const totalUsers = usersData?.data?.length ?? 0;

  return (
    <div className="relative w-full min-h-screen bg-[#020509] text-white selection:bg-[#dfb277]/30 selection:text-white pb-24 overflow-hidden">
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-[#dfb277]/[0.03] blur-[200px]" />
      <div className="pointer-events-none absolute right-0 top-40 h-[600px] w-[600px] rounded-full bg-blue-900/[0.04] blur-[200px]" />
      <div className="pointer-events-none absolute left-1/3 bottom-0 h-[500px] w-[500px] rounded-full bg-[#dfb277]/[0.02] blur-[220px]" />

      {/* Top Admin Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#030712]/80 backdrop-blur-2xl transition-all">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Brand & Server Status */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-[#dfb277]/20 via-[#dfb277]/10 to-transparent border border-[#dfb277]/40 flex items-center justify-center group-hover:scale-105 group-hover:border-[#dfb277] transition-all shadow-[0_0_25px_rgba(223,178,119,0.25)]">
                <ShieldCheck className="h-5 w-5 text-[#dfb277]" />
              </div>
              <div>
                <div className="font-editorial text-xl text-white font-light group-hover:text-[#dfb277] transition-colors leading-none tracking-tight">
                  Lunar Eclipse
                </div>
                <div className="text-[10px] font-mono tracking-[0.25em] text-[#dfb277] uppercase font-bold mt-1">
                  Enterprise Suite
                </div>
              </div>
            </Link>

            </div>

          {/* Right User Info & Actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/team"
              target="_blank"
              className="hidden md:inline-flex items-center gap-2 text-xs font-mono text-zinc-300 hover:text-white px-3.5 py-2 rounded-xl border border-white/10 hover:border-[#dfb277]/50 bg-white/[0.02] hover:bg-[#dfb277]/5 transition-all"
            >
              <span>View Live Portfolio</span>
              <Sparkles className="h-3.5 w-3.5 text-[#dfb277]" />
            </Link>

            <div className="hidden sm:flex flex-col text-right pl-2 border-l border-white/10">
              <span className="text-xs font-medium text-white tracking-wide">{user?.name || "Administrator"}</span>
              <span className="text-[10px] font-mono text-[#dfb277]">{user?.email || "admin@lunareclipse.com"}</span>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setPwdError(null);
                setPwdSuccess(null);
                setIsChangePasswordOpen(true);
              }}
              className="border-white/10 text-zinc-300 hover:text-white hover:border-[#dfb277]/40 hover:bg-[#dfb277]/10 transition-all rounded-xl"
            >
              <KeyRound className="h-3.5 w-3.5 mr-1 text-[#dfb277]" />
              <span className="hidden md:inline">Change Password</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="border-red-500/30 text-red-300 hover:bg-red-500/15 hover:border-red-500/60 transition-all rounded-xl"
            >
              <LogOut className="h-3.5 w-3.5 mr-1" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        {/* Welcome Headline Bar */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/[0.06]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase px-2.5 py-0.5 rounded-full bg-[#dfb277]/10 border border-[#dfb277]/20">
                <Sparkles className="h-3 w-3" />
                EXECUTIVE CONTROL CENTER
              </span>
            </div>
            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight bg-gradient-to-r from-white via-zinc-100 to-[#dfb277]/80 bg-clip-text text-transparent mt-1">
              Portal Overview & Management
            </h1>
            <p className="text-xs text-zinc-400 font-light mt-1.5 max-w-xl">
              Real-time administrative operations, dynamic team structure, and corporate department configuration.
            </p>
          </div>
        </div>

        {/* Luxury KPI Overview Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {/* Card 1: Team */}
          <div
            onClick={() => setActiveTab("team")}
            className="group relative cursor-pointer rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#0a0f19]/90 to-[#03060f]/95 p-6 hover:border-[#dfb277]/50 transition-all duration-500 hover:-translate-y-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:shadow-[0_20px_40px_rgba(223,178,119,0.12)] overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-[1.5px] before:bg-gradient-to-r before:from-transparent before:via-[#dfb277]/30 before:to-transparent"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#dfb277]/10 blur-xl group-hover:bg-[#dfb277]/20 transition-all" />
            <div className="flex items-center justify-between text-zinc-400 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider font-semibold">Team Members</span>
              <div className="h-9 w-9 rounded-xl bg-[#dfb277]/10 border border-[#dfb277]/30 flex items-center justify-center text-[#dfb277] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(223,178,119,0.3)] transition-all">
                <Users className="h-4.5 w-4.5" />
              </div>
            </div>
            <div className="font-editorial text-4xl text-white font-light tracking-tight group-hover:text-[#dfb277] transition-colors">
              {totalMembers}
            </div>
            <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>Dynamic records</span>
              <span className="text-emerald-400 font-medium">● Synced</span>
            </div>
          </div>

          {/* Card 2: Sections */}
          <div
            onClick={() => setActiveTab("sections")}
            className="group relative cursor-pointer rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#0a0f19]/90 to-[#03060f]/95 p-6 hover:border-[#dfb277]/50 transition-all duration-500 hover:-translate-y-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:shadow-[0_20px_40px_rgba(223,178,119,0.12)] overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-[1.5px] before:bg-gradient-to-r before:from-transparent before:via-[#dfb277]/30 before:to-transparent"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#dfb277]/10 blur-xl group-hover:bg-[#dfb277]/20 transition-all" />
            <div className="flex items-center justify-between text-zinc-400 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider font-semibold">Departments</span>
              <div className="h-9 w-9 rounded-xl bg-[#dfb277]/10 border border-[#dfb277]/30 flex items-center justify-center text-[#dfb277] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(223,178,119,0.3)] transition-all">
                <Layers className="h-4.5 w-4.5" />
              </div>
            </div>
            <div className="font-editorial text-4xl text-white font-light tracking-tight group-hover:text-[#dfb277] transition-colors">
              {totalSections}
            </div>
            <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>Active sections</span>
              <span className="text-emerald-400 font-medium">● Live DB</span>
            </div>
          </div>

          {/* Card 3: Users */}
          <div
            onClick={() => setActiveTab("users")}
            className="group relative cursor-pointer rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#0a0f19]/90 to-[#03060f]/95 p-6 hover:border-[#dfb277]/50 transition-all duration-500 hover:-translate-y-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:shadow-[0_20px_40px_rgba(223,178,119,0.12)] overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-[1.5px] before:bg-gradient-to-r before:from-transparent before:via-[#dfb277]/30 before:to-transparent"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#dfb277]/10 blur-xl group-hover:bg-[#dfb277]/20 transition-all" />
            <div className="flex items-center justify-between text-zinc-400 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider font-semibold">Registered Users</span>
              <div className="h-9 w-9 rounded-xl bg-[#dfb277]/10 border border-[#dfb277]/30 flex items-center justify-center text-[#dfb277] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(223,178,119,0.3)] transition-all">
                <UserCheck className="h-4.5 w-4.5" />
              </div>
            </div>
            <div className="font-editorial text-4xl text-white font-light tracking-tight group-hover:text-[#dfb277] transition-colors">
              {totalUsers}
            </div>
            <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>Platform accounts</span>
              <span className="text-[#dfb277] font-medium">● Protected</span>
            </div>
          </div>

          {/* Card 4: Audit Activity */}
          <div
            onClick={() => setActiveTab("activity")}
            className="group relative cursor-pointer rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#0a0f19]/90 to-[#03060f]/95 p-6 hover:border-[#dfb277]/50 transition-all duration-500 hover:-translate-y-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:shadow-[0_20px_40px_rgba(223,178,119,0.12)] overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-[1.5px] before:bg-gradient-to-r before:from-transparent before:via-[#dfb277]/30 before:to-transparent"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#dfb277]/10 blur-xl group-hover:bg-[#dfb277]/20 transition-all" />
            <div className="flex items-center justify-between text-zinc-400 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider font-semibold">Audit Stream</span>
              <div className="h-9 w-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all">
                <Activity className="h-4.5 w-4.5" />
              </div>
            </div>
            <div className="font-editorial text-4xl text-emerald-400 font-light tracking-tight">
              Active
            </div>
            <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>Event telemetry</span>
              <span className="text-emerald-400 font-medium">● 100% OK</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#030712]/90 border border-white/[0.08] mb-8 overflow-x-auto backdrop-blur-xl shadow-xl">
          <button
            onClick={() => setActiveTab("team")}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer select-none shrink-0 ${
              activeTab === "team"
                ? "bg-gradient-to-r from-[#dfb277] to-[#c99b5a] text-black font-bold shadow-[0_0_25px_rgba(223,178,119,0.4)] scale-[1.02]"
                : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
            }`}
          >
            <Users className="h-4 w-4" />
            <span>Team Members</span>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                activeTab === "team" ? "bg-black/20 text-black" : "bg-white/10 text-zinc-400"
              }`}
            >
              {totalMembers}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("sections")}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer select-none shrink-0 ${
              activeTab === "sections"
                ? "bg-gradient-to-r from-[#dfb277] to-[#c99b5a] text-black font-bold shadow-[0_0_25px_rgba(223,178,119,0.4)] scale-[1.02]"
                : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
            }`}
          >
            <Layers className="h-4 w-4" />
            <span>Department Sections</span>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                activeTab === "sections" ? "bg-black/20 text-black" : "bg-white/10 text-zinc-400"
              }`}
            >
              {totalSections}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("users")}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer select-none shrink-0 ${
              activeTab === "users"
                ? "bg-gradient-to-r from-[#dfb277] to-[#c99b5a] text-black font-bold shadow-[0_0_25px_rgba(223,178,119,0.4)] scale-[1.02]"
                : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
            }`}
          >
            <UserCheck className="h-4 w-4" />
            <span>User Accounts</span>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                activeTab === "users" ? "bg-black/20 text-black" : "bg-white/10 text-zinc-400"
              }`}
            >
              {totalUsers}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("activity")}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer select-none shrink-0 ${
              activeTab === "activity"
                ? "bg-gradient-to-r from-[#dfb277] to-[#c99b5a] text-black font-bold shadow-[0_0_25px_rgba(223,178,119,0.4)] scale-[1.02]"
                : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
            }`}
          >
            <Activity className="h-4 w-4" />
            <span>Activity Logs</span>
          </button>
        </div>

        {/* Tab Module Views */}
        <div className="transition-all duration-500">
          {activeTab === "team" && <TeamManagement />}
          {activeTab === "sections" && <SectionManagement />}
          {activeTab === "users" && <UserManagement />}
          {activeTab === "activity" && <ActivityManagement />}
        </div>
      </main>

      {/* ========================================== */}
      {/* Modal: CHANGE PASSWORD                     */}
      {/* ========================================== */}
      <Dialog open={isChangePasswordOpen} onOpenChange={setIsChangePasswordOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[0.25em] text-[#dfb277] uppercase font-bold px-2.5 py-0.5 rounded-full bg-[#dfb277]/10 border border-[#dfb277]/20 w-fit mb-1">
              <KeyRound className="h-3 w-3" />
              SECURITY PROTOCOL
            </div>
            <DialogTitle>Change Account Password</DialogTitle>
            <DialogDescription>
              Update your administrator login credentials. Ensure your new password is at least 6 characters.
            </DialogDescription>
          </DialogHeader>

          {pwdError && (
            <div className="flex items-start gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs text-red-300">
              <AlertCircle className="h-4 w-4 shrink-0 text-red-400 mt-0.5" />
              <span>{pwdError}</span>
            </div>
          )}

          {pwdSuccess && (
            <div className="flex items-start gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-xs text-emerald-300">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
              <span>{pwdSuccess}</span>
            </div>
          )}

          <form onSubmit={handleChangePasswordSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium">
                Current Password *
              </label>
              <Input
                type="password"
                required
                placeholder="Enter current password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium">
                New Password *
              </label>
              <Input
                type="password"
                required
                placeholder="Min 6 characters"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium">
                Confirm New Password *
              </label>
              <Input
                type="password"
                required
                placeholder="Re-enter new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <DialogFooter>
              <Button type="button" variant="ghost" onClick={() => setIsChangePasswordOpen(false)} className="text-zinc-400 hover:text-white">
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isChangingPassword}
                className="bg-gradient-to-r from-[#dfb277] to-[#c79b5b] hover:from-[#e5bd85] hover:to-[#dfb277] text-black font-semibold shadow-[0_0_20px_rgba(223,178,119,0.3)] px-6"
              >
                {isChangingPassword ? "Updating..." : "Update Password"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}


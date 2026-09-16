import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Lock,
  Mail,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  KeyRound,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
  RefreshCw,
  Eye,
  EyeOff,
} from "lucide-react";
import {
  useLoginMutation,
  useForgotPasswordMutation,
  useVerifyResetOtpMutation,
  useResetPasswordMutation,
  useAppDispatch,
  logout,
} from "../../redux";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";

type AuthMode = "LOGIN" | "FORGOT_PASSWORD" | "RESET_PASSWORD" | "RESET_SUCCESS";

export function AdminLogin() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [mode, setMode] = useState<AuthMode>("LOGIN");

  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);

  // Status & Feedback
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Mutations
  const [login, { isLoading: isLoggingIn }] = useLoginMutation();
  const [forgotPassword, { isLoading: isSendingOtp }] = useForgotPasswordMutation();
  const [verifyOtp, { isLoading: isVerifyingOtp }] = useVerifyResetOtpMutation();
  const [resetPassword, { isLoading: isResettingPassword }] = useResetPasswordMutation();

  // 1. Handle Login
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    try {
      const res = await login({ email, password }).unwrap();
      const userRole = res?.data?.user?.role;
      const isAdmin = userRole === "ADMIN" || userRole === "SUPER_ADMIN";

      if (!isAdmin) {
        dispatch(logout());
        setErrorMessage(
          `Access Denied: Account "${res?.data?.user?.email || email}" has role "${userRole || "USER"}". The Executive Portal is strictly restricted to ADMIN and SUPER_ADMIN personnel only.`
        );
        return;
      }

      navigate("/admin");
    } catch (err: any) {
      console.error("Login failed:", err);
      setErrorMessage(
        err?.data?.message || err?.error || "Invalid credentials. Please verify your email and password."
      );
    }
  };

  // 2. Handle Forgot Password (Send OTP)
  const handleForgotSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    if (!email.trim()) {
      setErrorMessage("Please enter your registered email address.");
      return;
    }
    try {
      const res = await forgotPassword({ email }).unwrap();
      setSuccessMessage(
        res?.message || "Verification code has been dispatched to your email address."
      );
      setMode("RESET_PASSWORD");
    } catch (err: any) {
      console.error("Forgot password request failed:", err);
      setErrorMessage(
        err?.data?.message || err?.error || "Could not dispatch reset code. Ensure email exists in system."
      );
    }
  };

  // 3. Handle Reset Password with OTP
  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (newPassword.length < 6) {
      setErrorMessage("New password must be at least 6 characters long.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setErrorMessage("New passwords do not match. Please re-enter.");
      return;
    }

    try {
      // Step A: verify OTP if present
      if (otp) {
        await verifyOtp({ email, otp }).unwrap();
      }

      // Step B: reset password
      await resetPassword({ email, newPassword }).unwrap();

      setSuccessMessage("Your password has been successfully reset. You may now log in.");
      setMode("RESET_SUCCESS");
      setPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setOtp("");
    } catch (err: any) {
      console.error("Password reset failed:", err);
      setErrorMessage(
        err?.data?.message || err?.error || "Failed to reset password. Please check your OTP code and try again."
      );
    }
  };

  return (
    <div className="relative min-h-screen bg-[#020509] text-white flex flex-col justify-center items-center px-4 py-12 selection:bg-[#dfb277]/30 selection:text-white overflow-hidden">
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-[#dfb277]/[0.05] blur-[220px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-blue-900/[0.06] blur-[220px]" />

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
        <Card className="relative overflow-hidden border border-white/[0.12] bg-gradient-to-b from-[#0a0f19]/95 to-[#03060f]/98 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] before:absolute before:inset-x-0 before:top-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-[#dfb277]/50 before:to-transparent">
          {/* Card Header */}
          <CardHeader className="text-center pb-6 pt-8">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#dfb277]/20 via-[#dfb277]/10 to-transparent border border-[#dfb277]/40 shadow-[0_0_30px_rgba(223,178,119,0.25)]">
              {mode === "LOGIN" ? (
                <ShieldCheck className="h-8 w-8 text-[#dfb277]" />
              ) : mode === "RESET_SUCCESS" ? (
                <CheckCircle2 className="h-8 w-8 text-emerald-400" />
              ) : (
                <KeyRound className="h-8 w-8 text-[#dfb277]" />
              )}
            </div>

            <div className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[0.25em] text-[#dfb277] uppercase font-bold px-3 py-1 rounded-full bg-[#dfb277]/10 border border-[#dfb277]/20 mx-auto mb-2">
              <Sparkles className="h-3 w-3" />
              {mode === "LOGIN"
                ? "EXECUTIVE PORTAL"
                : mode === "FORGOT_PASSWORD"
                ? "ACCOUNT RECOVERY"
                : mode === "RESET_PASSWORD"
                ? "SECURITY VERIFICATION"
                : "CREDENTIALS UPDATED"}
            </div>

            <CardTitle className="font-editorial text-3xl sm:text-4xl text-white font-light tracking-tight">
              {mode === "LOGIN"
                ? "Administrator Sign In"
                : mode === "FORGOT_PASSWORD"
                ? "Forgot Password"
                : mode === "RESET_PASSWORD"
                ? "Set New Password"
                : "Password Reset Complete"}
            </CardTitle>

            <CardDescription className="mt-2 text-xs text-zinc-400 font-light max-w-xs mx-auto">
              {mode === "LOGIN"
                ? "Authenticate with executive credentials to manage corporate team, sections, and platform security."
                : mode === "FORGOT_PASSWORD"
                ? "Enter your registered email address to receive an authentication OTP code."
                : mode === "RESET_PASSWORD"
                ? "Enter the 6-digit verification code sent to your email along with your new password."
                : "Your password has been successfully updated. You can now log in."}
            </CardDescription>
          </CardHeader>

          <CardContent className="px-6 sm:px-8 pb-8">
            {/* Feedback Alerts */}
            {errorMessage && (
              <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-xs text-red-300 backdrop-blur-md">
                <AlertCircle className="h-4 w-4 shrink-0 text-red-400 mt-0.5" />
                <span className="leading-relaxed">{errorMessage}</span>
              </div>
            )}

            {successMessage && (
              <div className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs text-emerald-300 backdrop-blur-md">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                <span className="leading-relaxed">{successMessage}</span>
              </div>
            )}

            {/* ================================================== */}
            {/* MODE 1: LOGIN                                      */}
            {/* ================================================== */}
            {mode === "LOGIN" && (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium">
                    Executive Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-[#dfb277]/70" />
                    <Input
                      type="email"
                      required
                      placeholder="admin@lunareclipse.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-11 bg-[#020509]/80 border-white/10 focus:border-[#dfb277] focus:ring-1 focus:ring-[#dfb277]/30 text-xs rounded-xl shadow-inner placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium">
                      Password *
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setErrorMessage(null);
                        setSuccessMessage(null);
                        setMode("FORGOT_PASSWORD");
                      }}
                      className="text-[11px] font-mono text-[#dfb277] hover:underline cursor-pointer transition-colors"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-[#dfb277]/70" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10 h-11 bg-[#020509]/80 border-white/10 focus:border-[#dfb277] focus:ring-1 focus:ring-[#dfb277]/30 text-xs rounded-xl shadow-inner placeholder:text-zinc-600"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-zinc-500 hover:text-white"
                      tabIndex={-1}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoggingIn}
                  className="w-full h-11 mt-6 bg-gradient-to-r from-[#dfb277] to-[#c79b5b] hover:from-[#e5bd85] hover:to-[#dfb277] text-black font-semibold tracking-wider uppercase text-xs shadow-[0_0_25px_rgba(223,178,119,0.3)] transition-all duration-300"
                >
                  <span>{isLoggingIn ? "Authenticating..." : "Sign In to Enterprise Dashboard"}</span>
                  <ArrowRight className="h-4 w-4 ml-1.5 stroke-[2.5]" />
                </Button>
              </form>
            )}

            {/* ================================================== */}
            {/* MODE 2: FORGOT PASSWORD (Request OTP)              */}
            {/* ================================================== */}
            {mode === "FORGOT_PASSWORD" && (
              <form onSubmit={handleForgotSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium">
                    Registered Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-[#dfb277]/70" />
                    <Input
                      type="email"
                      required
                      placeholder="admin@lunareclipse.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-11 bg-[#020509]/80 border-white/10 focus:border-[#dfb277] focus:ring-1 focus:ring-[#dfb277]/30 text-xs rounded-xl shadow-inner placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSendingOtp}
                  className="w-full h-11 mt-4 bg-gradient-to-r from-[#dfb277] to-[#c79b5b] hover:from-[#e5bd85] hover:to-[#dfb277] text-black font-semibold tracking-wider uppercase text-xs shadow-[0_0_25px_rgba(223,178,119,0.3)] transition-all"
                >
                  <span>{isSendingOtp ? "Dispatching Code..." : "Send Verification Code"}</span>
                  <ArrowRight className="h-4 w-4 ml-1.5 stroke-[2.5]" />
                </Button>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/[0.08] text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => {
                      setErrorMessage(null);
                      setSuccessMessage(null);
                      setMode("RESET_PASSWORD");
                    }}
                    className="text-zinc-400 hover:text-[#dfb277] transition-colors"
                  >
                    Already have OTP code?
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setErrorMessage(null);
                      setSuccessMessage(null);
                      setMode("LOGIN");
                    }}
                    className="text-[#dfb277] hover:underline"
                  >
                    Back to Sign In
                  </button>
                </div>
              </form>
            )}

            {/* ================================================== */}
            {/* MODE 3: RESET PASSWORD (Verify OTP & Update)       */}
            {/* ================================================== */}
            {mode === "RESET_PASSWORD" && (
              <form onSubmit={handleResetSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium">
                    Registered Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-[#dfb277]/70" />
                    <Input
                      type="email"
                      required
                      placeholder="admin@lunareclipse.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-11 bg-[#020509]/80 border-white/10 focus:border-[#dfb277] focus:ring-1 focus:ring-[#dfb277]/30 text-xs rounded-xl shadow-inner placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium">
                    6-Digit Verification OTP Code *
                  </label>
                  <div className="relative">
                    <KeyRound className="absolute left-3.5 top-3.5 h-4 w-4 text-[#dfb277]/70" />
                    <Input
                      type="text"
                      required
                      placeholder="e.g. 123456"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      maxLength={6}
                      className="pl-10 h-11 bg-[#020509]/80 border-white/10 focus:border-[#dfb277] focus:ring-1 focus:ring-[#dfb277]/30 text-xs rounded-xl shadow-inner font-mono tracking-[0.2em]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium">
                    New Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-[#dfb277]/70" />
                    <Input
                      type={showNewPassword ? "text" : "password"}
                      required
                      placeholder="Min 6 characters"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="pl-10 pr-10 h-11 bg-[#020509]/80 border-white/10 focus:border-[#dfb277] focus:ring-1 focus:ring-[#dfb277]/30 text-xs rounded-xl shadow-inner placeholder:text-zinc-600"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-3 text-zinc-500 hover:text-white"
                      tabIndex={-1}
                    >
                      {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-medium">
                    Confirm New Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-[#dfb277]/70" />
                    <Input
                      type="password"
                      required
                      placeholder="Repeat new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="pl-10 h-11 bg-[#020509]/80 border-white/10 focus:border-[#dfb277] focus:ring-1 focus:ring-[#dfb277]/30 text-xs rounded-xl shadow-inner placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isVerifyingOtp || isResettingPassword}
                  className="w-full h-11 mt-4 bg-gradient-to-r from-[#dfb277] to-[#c79b5b] hover:from-[#e5bd85] hover:to-[#dfb277] text-black font-semibold tracking-wider uppercase text-xs shadow-[0_0_25px_rgba(223,178,119,0.3)] transition-all"
                >
                  <span>
                    {isVerifyingOtp || isResettingPassword
                      ? "Updating Password..."
                      : "Verify OTP & Reset Password"}
                  </span>
                  <ArrowRight className="h-4 w-4 ml-1.5 stroke-[2.5]" />
                </Button>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/[0.08] text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setMode("FORGOT_PASSWORD")}
                    className="text-zinc-400 hover:text-[#dfb277] transition-colors"
                  >
                    Resend code?
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setErrorMessage(null);
                      setSuccessMessage(null);
                      setMode("LOGIN");
                    }}
                    className="text-[#dfb277] hover:underline"
                  >
                    Back to Sign In
                  </button>
                </div>
              </form>
            )}

            {/* ================================================== */}
            {/* MODE 4: RESET SUCCESS CONFIRMATION                 */}
            {/* ================================================== */}
            {mode === "RESET_SUCCESS" && (
              <div className="text-center py-4 space-y-6">
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono leading-relaxed">
                  Your administrator account password has been updated securely. You can now log into the executive portal with your new credentials.
                </div>

                <Button
                  type="button"
                  onClick={() => {
                    setErrorMessage(null);
                    setSuccessMessage(null);
                    setMode("LOGIN");
                  }}
                  className="w-full h-11 bg-gradient-to-r from-[#dfb277] to-[#c79b5b] hover:from-[#e5bd85] hover:to-[#dfb277] text-black font-semibold tracking-wider uppercase text-xs shadow-[0_0_25px_rgba(223,178,119,0.3)] transition-all"
                >
                  <span>Proceed to Sign In</span>
                  <ArrowRight className="h-4 w-4 ml-1.5 stroke-[2.5]" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

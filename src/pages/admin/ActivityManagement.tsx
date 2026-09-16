import { Activity, Clock, Shield, Loader2, Sparkles, User, Layers, UploadCloud, Terminal } from "lucide-react";
import { useGetAllActivityLogsQuery } from "../../redux";
import { Badge } from "../../components/ui/badge";
import { Card } from "../../components/ui/card";

export function ActivityManagement() {
  const { data: logsResponse, isLoading } = useGetAllActivityLogsQuery();
  const logs = logsResponse?.data || [];

  const getLogIcon = (type: string) => {
    const t = (type || "").toUpperCase();
    if (t.includes("AUTH") || t.includes("LOGIN") || t.includes("USER")) {
      return <Shield className="h-4 w-4 text-[#dfb277]" />;
    }
    if (t.includes("TEAM") || t.includes("MEMBER")) {
      return <User className="h-4 w-4 text-emerald-400" />;
    }
    if (t.includes("SECTION") || t.includes("ABOUT")) {
      return <Layers className="h-4 w-4 text-blue-400" />;
    }
    if (t.includes("UPLOAD") || t.includes("MEDIA") || t.includes("IMAGE")) {
      return <UploadCloud className="h-4 w-4 text-purple-400" />;
    }
    return <Activity className="h-4 w-4 text-[#dfb277]" />;
  };

  return (
    <div className="space-y-8">
      {/* Header Bar */}
      <div className="border-b border-white/[0.08] pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[0.25em] text-[#dfb277] uppercase font-bold px-2.5 py-0.5 rounded-full bg-[#dfb277]/10 border border-[#dfb277]/20">
              <Terminal className="h-3 w-3" />
              AUDIT TELEMETRY STREAM
            </span>
            <span className="text-[11px] font-mono text-zinc-500">
              ({logs.length} Recorded Operations)
            </span>
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl text-white font-light tracking-tight">
            System Activity Logs
          </h2>
          <p className="text-xs text-zinc-400 font-light mt-1 max-w-xl">
            Real-time audit log stream tracking administrative operations, logins, image uploads, and portfolio modifications.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-zinc-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span>Live Audit Logging</span>
        </div>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-24 rounded-2xl border border-dashed border-white/10 bg-[#030712]/40 backdrop-blur-md">
          <div className="relative">
            <div className="h-12 w-12 rounded-full border-2 border-[#dfb277]/20 border-t-[#dfb277] animate-spin" />
            <Sparkles className="h-4 w-4 text-[#dfb277] absolute inset-0 m-auto" />
          </div>
          <p className="text-xs font-mono text-[#dfb277] mt-4 uppercase tracking-widest font-semibold">Retrieving Audit Stream</p>
          <p className="text-[11px] text-zinc-500 font-mono mt-1">Connecting to backend activity events...</p>
        </div>
      ) : logs.length === 0 ? (
        <div className="p-16 text-center rounded-3xl border border-dashed border-white/15 bg-gradient-to-b from-[#0a0f19]/40 to-[#030712]/70 backdrop-blur-xl">
          <Activity className="h-10 w-10 text-zinc-600 mx-auto mb-3" />
          <h3 className="font-editorial text-2xl text-white font-light">No Activity Recorded</h3>
          <p className="text-xs text-zinc-400 max-w-sm mx-auto mt-2 font-light leading-relaxed">
            System audit events such as logins, personnel changes, and uploads will automatically be captured here.
          </p>
        </div>
      ) : (
        <Card className="overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#0a0f19]/90 to-[#03060f]/95 backdrop-blur-xl shadow-2xl">
          <div className="divide-y divide-white/[0.05]">
            {logs.map((log) => {
              const logId = log.id || log._id || "";
              return (
                <div
                  key={logId}
                  className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-white/[0.03] transition-colors group"
                >
                  <div className="flex items-start gap-4 min-w-0">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-b from-white/10 to-transparent border border-white/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[#dfb277]/50 transition-colors shadow-inner">
                      {getLogIcon(log.type)}
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="inline-flex items-center text-[10px] font-mono tracking-wider font-semibold uppercase px-2 py-0.5 rounded-md bg-[#dfb277]/10 text-[#dfb277] border border-[#dfb277]/25">
                          {log.type}
                        </span>
                        {log.userId && (
                          <span className="text-[11px] font-mono text-zinc-500 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.05]">
                            UID: {log.userId}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-white font-light group-hover:text-zinc-100 transition-colors">
                        {log.message}
                      </p>
                      {log.meta && Object.keys(log.meta).length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1.5 text-[11px] font-mono text-zinc-400">
                          {Object.entries(log.meta).map(([k, v]) => (
                            <span key={k} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] truncate max-w-xs">
                              <span className="text-[#dfb277]">{k}:</span> {typeof v === "object" ? JSON.stringify(v) : String(v)}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {log.createdAt && (
                    <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 shrink-0 bg-white/[0.02] border border-white/[0.05] px-3 py-1.5 rounded-lg">
                      <Clock className="h-3.5 w-3.5 text-[#dfb277]/80" />
                      <span>{new Date(log.createdAt).toLocaleString()}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Card>
      )}
    </div>
  );
}

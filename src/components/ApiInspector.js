"use client";

import { useState } from "react";
import { Play, CheckCircle2, AlertCircle, Clock, Database, Code, Copy, Check } from "lucide-react";

export default function ApiInspector() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleTestApi = async () => {
    setLoading(true);
    setResponse(null);

    const startTime = performance.now();
    try {
      const res = await fetch("/api/projects", { cache: "no-store" });
      const endTime = performance.now();
      const latency = Math.round(endTime - startTime);

      const json = await res.json();
      setResponse({
        status: res.status,
        statusText: res.statusText || "OK",
        latencyMs: latency,
        data: json,
        success: res.ok,
      });
    } catch (err) {
      const endTime = performance.now();
      setResponse({
        status: 500,
        statusText: "Network Error",
        latencyMs: Math.round(endTime - startTime),
        error: err.message,
        success: false,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCopyJson = () => {
    if (response?.data) {
      navigator.clipboard.writeText(JSON.stringify(response.data, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4 font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-3 border-b border-white/10">
        <div>
          <h4 className="text-base font-bold text-white font-[Outfit] flex items-center gap-2">
            <Database className="w-5 h-5 text-violet-400" />
            <span>MongoDB Atlas API Live Inspector</span>
          </h4>
          <p className="text-xs text-zinc-400 mt-0.5">
            Test serverless API latency & JSON payload from endpoint <code className="text-violet-300 font-mono">GET /api/projects</code>
          </p>
        </div>

        <button
          onClick={handleTestApi}
          disabled={loading}
          className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold flex items-center gap-2 shadow-md transition-all cursor-pointer disabled:opacity-50 shrink-0"
        >
          <Play className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
          <span>{loading ? "Testing..." : "Send Test Request"}</span>
        </button>
      </div>

      {response && (
        <div className="space-y-3 font-mono">
          {/* Status Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <p className="text-[10px] text-zinc-400 uppercase font-semibold">HTTP Status</p>
              <p className={`text-sm font-bold mt-0.5 flex items-center gap-1 ${response.success ? "text-emerald-400" : "text-rose-400"}`}>
                {response.success ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                <span>{response.status} {response.statusText}</span>
              </p>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <p className="text-[10px] text-zinc-400 uppercase font-semibold">API Latency</p>
              <p className="text-sm font-bold text-violet-300 mt-0.5 flex items-center gap-1">
                <Clock className="w-4 h-4 text-violet-400" />
                <span>{response.latencyMs} ms</span>
              </p>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <p className="text-[10px] text-zinc-400 uppercase font-semibold">Payload Count</p>
              <p className="text-sm font-bold text-cyan-300 mt-0.5">
                {response.data?.count || response.data?.data?.length || 0} Documents
              </p>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <p className="text-[10px] text-zinc-400 uppercase font-semibold">Format</p>
              <p className="text-sm font-bold text-amber-300 mt-0.5">application/json</p>
            </div>
          </div>

          {/* JSON Payload Viewer */}
          <div className="rounded-xl bg-zinc-950 border border-zinc-800 overflow-hidden text-xs">
            <div className="px-4 py-2 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
              <span className="text-[11px] text-zinc-400 font-bold">Response JSON Output</span>
              <button
                onClick={handleCopyJson}
                className="text-[10px] text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? "Copied" : "Copy Payload"}</span>
              </button>
            </div>
            <pre className="p-4 max-h-48 overflow-y-auto text-zinc-300 leading-relaxed font-mono">
              <code>{JSON.stringify(response.data || response.error, null, 2)}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}

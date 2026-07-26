import { ShieldCheck } from "lucide-react";

export default function Loading() {
  return (
    <div className="w-full h-[60vh] flex flex-col items-center justify-center bg-background">
      <div className="relative flex items-center justify-center">
        {/* Pulsing outer ring */}
        <div className="absolute w-16 h-16 rounded-full border-2 border-accent/20 animate-ping" />
        {/* Inner static icon */}
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-200 z-10">
          <ShieldCheck className="w-6 h-6 text-accent animate-pulse" />
        </div>
      </div>
      <p className="mt-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
        Loading...
      </p>
    </div>
  );
}

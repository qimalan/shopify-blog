"use client";

export function GridLines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-40 hidden lg:block">
      {/* 4 vertical lines aligned with 12-column grid */}
      <div className="absolute left-[8.33%] top-0 bottom-0 w-px bg-charcoal/10" />
      <div className="absolute left-[33.33%] top-0 bottom-0 w-px bg-charcoal/10" />
      <div className="absolute left-[66.66%] top-0 bottom-0 w-px bg-charcoal/10" />
      <div className="absolute left-[91.66%] top-0 bottom-0 w-px bg-charcoal/10" />
    </div>
  );
}

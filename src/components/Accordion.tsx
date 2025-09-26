// src/components/Accordion.tsx
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type AccordionProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

export default function Accordion({ title, children, defaultOpen = false, className }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`rounded-xl border border-border bg-card overflow-hidden ${className ?? ""}`}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        className="w-full flex items-center justify-between px-4 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-sky-300"
      >
        <div className="text-left">
          <div className="text-body-md font-semibold text-foreground">{title}</div>
        </div>
        <ChevronDown className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
      </button>

      <div
        className={`px-4 pb-4 transition-[max-height,opacity] duration-250 ease-in-out ${open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
        aria-hidden={!open}
      >
        <div className="pt-2 text-body-md text-card-foreground">
          {children}
        </div>
      </div>
    </div>
  );
}

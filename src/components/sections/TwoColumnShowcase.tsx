// src/components/sections/TwoColumnShowcase.tsx
import React from "react";
import {cn} from "@/lib/utils";

export type LeftSmallItem = {
  id: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** optional small icon/node */
  icon?: React.ReactNode;
};

type Props = {
  leftItems: LeftSmallItem[]; // stacked small cards on the left
  rightImage?: React.ReactNode; // big image or illustration on the right
  className?: string;
};

export default function TwoColumnShowcase({ leftItems, rightImage, className }: Props) {
  return (
    <section className={cn("py-16", className)}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* LEFT: stacked small cards */}
          <div className="space-y-6">
            {leftItems.map((it) => (
              <div
                key={it.id}
                className="p-4 md:p-6 bg-white rounded-xl shadow-md border border-slate-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                    {it.icon ?? (
                      <div className="w-6 h-6 bg-slate-300 rounded" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
                    {it.description && (
                      <p className="mt-2 text-sm text-slate-600">{it.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: large image / illustrative block */}
          <div className="flex items-center justify-center">
            <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100">
              {rightImage ?? (
                <div className="w-full h-72 md:h-96 bg-slate-200 flex items-center justify-center">
                  {/* placeholder if no image provided */}
                  <span className="text-slate-500 text-xl">Illustration</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// src/components/sections/IconCardStack.tsx
import React from "react";
import {cn} from "@/lib/utils";

export type IconCard = {
  id: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
};

type Props = {
  items: IconCard[];
  className?: string;
};

export default function IconCardStack({ items, className }: Props) {
  return (
    <section className={cn("py-12", className)}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {items.map((it) => (
            <article
              key={it.id}
              className="bg-white rounded-xl p-6 shadow-md border border-slate-100 flex items-center gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center">
                  {it.icon ?? <div className="w-10 h-10 bg-slate-300 rounded-full" />}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-900">{it.title}</h4>
                {it.description && (
                  <p className="mt-2 text-sm text-slate-600 max-w-prose">{it.description}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

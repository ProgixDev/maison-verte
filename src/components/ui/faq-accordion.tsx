"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export type FaqItem = { q: string; a: string };
export type FaqGroup = { title?: string; items: FaqItem[] };

/**
 * Accordion with a single open item across all groups (matches the prototype's
 * one-open behavior). Used flat on the home page and grouped on the FAQ page.
 */
export function FaqAccordion({
  groups,
  defaultOpen = 0,
}: {
  groups: FaqGroup[];
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState(defaultOpen);

  let counter = 0;
  const decorated = groups.map((group) => ({
    title: group.title,
    items: group.items.map((item) => ({ ...item, index: counter++ })),
  }));

  return (
    <>
      {decorated.map((group, gi) => (
        <div key={group.title ?? gi} className={group.title ? "mb-[30px]" : ""}>
          {group.title ? (
            <h2 className="text-forest m-0 mb-3.5 flex items-center gap-2.5 text-[14px] font-bold tracking-[0.08em] uppercase">
              <span className="bg-forest h-0.5 w-6 rounded-sm" />
              {group.title}
            </h2>
          ) : null}
          {group.items.map((item) => {
            const isOpen = open === item.index;
            return (
              <div
                key={item.index}
                className="border-pine/10 bg-card mb-3 overflow-hidden rounded-2xl border"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : item.index)}
                  className="text-pine flex w-full cursor-pointer items-center justify-between gap-4 border-none bg-none px-[22px] py-[19px] text-left text-[16.5px] font-semibold"
                >
                  <span>{item.q}</span>
                  <span className="text-forest shrink-0">
                    {isOpen ? <Minus className="size-5" /> : <Plus className="size-5" />}
                  </span>
                </button>
                {isOpen ? (
                  <div className="text-moss px-[22px] pb-[22px] text-[15.5px] leading-[1.65]">
                    {item.a}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
}

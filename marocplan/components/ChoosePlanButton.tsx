"use client";

import { ArrowRight } from "lucide-react";
import type { PlanId } from "@/lib/site";

export const PLAN_EVENT = "marocplan:plan";

export default function ChoosePlanButton({ plan, label, highlighted }: { plan: PlanId; label: string; highlighted?: boolean }) {
  return (
    <a
      href="#commander"
      onClick={() => window.dispatchEvent(new CustomEvent<PlanId>(PLAN_EVENT, { detail: plan }))}
      className={`${highlighted ? "btn-primary" : "btn-ghost"} w-full`}
    >
      {label}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

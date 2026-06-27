"use client";

import { ExperienceDetailPage } from "@/components/experience/ExperienceDetailPage";
import type { CircuitDetailContent } from "@/lib/circuits/types";
import { useDictionary } from "@/lib/i18n/locale-context";

type Props = {
  circuit: {
    rating: number;
    reviews: number;
    price: number;
    image: string;
    images?: readonly string[];
  };
  detail: CircuitDetailContent;
  cardTitle: string;
  badge: string;
};

export function CircuitDetailPage({ circuit, detail, cardTitle, badge }: Props) {
  const dict = useDictionary();

  return (
    <ExperienceDetailPage
      item={circuit}
      detail={detail}
      cardTitle={cardTitle}
      badge={badge}
      listAnchor="#circuits"
      listLabel={dict.circuits.viewAll}
    />
  );
}

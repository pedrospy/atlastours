"use client";

import { ExperienceDetailPage } from "@/components/experience/ExperienceDetailPage";
import { excursionDetailTextClasses } from "@/lib/catalog";
import type { ExcursionDetailContent } from "@/lib/excursions/types";
import { useDictionary } from "@/lib/i18n/locale-context";

type Props = {
  excursion: {
    rating: number;
    reviews: number;
    price: number;
    image: string;
  };
  detail: ExcursionDetailContent;
  cardTitle: string;
  badge: string;
};

export function ExcursionDetailPage({ excursion, detail, cardTitle, badge }: Props) {
  const dict = useDictionary();

  return (
    <ExperienceDetailPage
      item={excursion}
      detail={detail}
      cardTitle={cardTitle}
      badge={badge}
      textClasses={excursionDetailTextClasses}
      listAnchor="#excursions"
      listLabel={dict.excursionDetail.breadcrumbAll}
    />
  );
}

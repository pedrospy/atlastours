"use client";

import { ExperienceDetailPage } from "@/components/experience/ExperienceDetailPage";
import type { DestinationDetailContent } from "@/lib/destinations/types";
import { useDictionary } from "@/lib/i18n/locale-context";

type Props = {
  destination: {
    rating: number;
    reviews: number;
    price: number;
    image: string;
    images?: readonly string[];
  };
  detail: DestinationDetailContent;
  cardTitle: string;
  badge: string;
};

export function DestinationDetailPage({
  destination,
  detail,
  cardTitle,
  badge,
}: Props) {
  const dict = useDictionary();

  return (
    <ExperienceDetailPage
      item={destination}
      detail={detail}
      cardTitle={cardTitle}
      badge={badge}
      listAnchor="#destinations"
      listLabel={dict.destinations.breadcrumbAll}
    />
  );
}

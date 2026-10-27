"use client";

import { ExperienceDetailPage } from "@/components/experience/ExperienceDetailPage";
import type { BookingFormConfig } from "@/components/booking/BookingForm";
import { circuitDetailTextClasses } from "@/lib/catalog";
import type { CircuitDetailContent } from "@/lib/circuits/types";
import { useDictionary } from "@/lib/i18n/locale-context";

type Props = {
  circuit: {
    rating: number;
    reviews: number;
    price: number;
    image: string;
    images?: readonly string[];
    badgeClass?: string;
  };
  detail: CircuitDetailContent;
  cardTitle: string;
  badge: string;
  booking?: BookingFormConfig;
};

export function CircuitDetailPage({ circuit, detail, cardTitle, badge, booking }: Props) {
  const dict = useDictionary();

  return (
    <ExperienceDetailPage
      item={circuit}
      detail={detail}
      cardTitle={cardTitle}
      badge={badge}
      badgeClass={circuit.badgeClass}
      textClasses={circuitDetailTextClasses}
      listAnchor="/circuits"
      listLabel={dict.circuits.viewAll}
      booking={booking}
    />
  );
}

"use client";

import { useMemo, useState } from "react";
import { offers } from "@/lib/site";

const DIRECT_SHIFT = 0.25;

const euro = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

type SliderProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  suffix: string;
  onChange: (v: number) => void;
};

function Slider({ label, value, min, max, step = 1, suffix, onChange }: SliderProps) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between text-sm">
        <span className="font-medium text-ink/80">{label}</span>
        <span className="font-display text-lg font-bold">
          {value}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-brand"
      />
    </label>
  );
}

export function Calculator() {
  const [rooms, setRooms] = useState(8);
  const [price, setPrice] = useState(90);
  const [occupancy, setOccupancy] = useState(60);
  const [otaShare, setOtaShare] = useState(75);
  const [commission, setCommission] = useState(17);

  const result = useMemo(() => {
    const nights = rooms * 365 * (occupancy / 100);
    const otaRevenue = nights * price * (otaShare / 100);
    const paid = otaRevenue * (commission / 100);
    const saved = paid * DIRECT_SHIFT;
    const pack = offers.find((o) => o.highlighted)!;
    const yearlyCost = pack.setup + pack.monthly * 12;
    const paybackMonths = saved > 0 ? Math.max(1, Math.ceil(yearlyCost / (saved / 12))) : null;
    return { paid, saved, yearlyCost, paybackMonths };
  }, [rooms, price, occupancy, otaShare, commission]);

  return (
    <section id="calculateur" className="py-20">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Calculateur</p>
          <h2 className="section-title mt-3">Combien Booking vous coûte-t-il vraiment ?</h2>
          <p className="mt-4 text-ink/70">
            Déplacez les curseurs. L&apos;estimation suppose qu&apos;un site bien référencé transforme{" "}
            {DIRECT_SHIFT * 100} % de vos réservations plateformes en réservations directes.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          <div className="space-y-6 rounded-3xl bg-white p-6 shadow-card sm:p-8 lg:col-span-3">
            <Slider label="Nombre de chambres" value={rooms} min={1} max={30} suffix="" onChange={setRooms} />
            <Slider label="Prix moyen par nuit" value={price} min={30} max={400} step={5} suffix=" €" onChange={setPrice} />
            <Slider label="Taux d'occupation" value={occupancy} min={10} max={100} suffix=" %" onChange={setOccupancy} />
            <Slider label="Part des réservations via plateformes" value={otaShare} min={0} max={100} suffix=" %" onChange={setOtaShare} />
            <Slider label="Commission moyenne" value={commission} min={10} max={25} suffix=" %" onChange={setCommission} />
          </div>

          <div className="flex flex-col justify-between rounded-3xl bg-brand p-6 text-white shadow-card sm:p-8 lg:col-span-2">
            <div>
              <p className="text-white/80">Commissions payées par an</p>
              <p className="font-display text-4xl font-extrabold" data-testid="paid">
                {euro.format(result.paid)}
              </p>
              <p className="mt-6 text-white/80">Économie estimée avec DirectRiad</p>
              <p className="font-display text-5xl font-extrabold text-sun-light" data-testid="saved">
                {euro.format(result.saved)}
                <span className="text-lg font-semibold text-white/80"> / an</span>
              </p>
              <p className="mt-6 text-sm text-white/80">
                Coût du pack Réservation directe la 1re année : {euro.format(result.yearlyCost)}.
                {result.paybackMonths !== null && (
                  <>
                    {" "}
                    Rentabilisé en{" "}
                    <strong className="text-white">
                      {result.paybackMonths > 24 ? "plus de 24" : result.paybackMonths} mois
                    </strong>
                    .
                  </>
                )}
              </p>
            </div>
            <a href="#contact" className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-brand-dark transition hover:bg-cream">
              Recevoir mon audit gratuit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

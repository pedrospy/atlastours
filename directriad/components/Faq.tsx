import { faqs } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="bg-white py-20">
      <div className="container-x max-w-3xl">
        <p className="eyebrow">FAQ</p>
        <h2 className="section-title mt-3">Questions fréquentes</h2>
        <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {f.q}
                <span className="text-2xl text-brand transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-ink/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

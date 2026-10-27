import type { FormState } from "@/lib/forms";

export function FormMessage({ state }: { state: FormState }) {
  if (state?.error) {
    return (
      <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
        {state.error}
      </p>
    );
  }
  if (state?.ok) {
    return <p className="rounded-lg bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">{state.ok}</p>;
  }
  return null;
}

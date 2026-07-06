import { ChevronDown } from "lucide-react";

type Option = { value: string; label: string };

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  disabled?: boolean;
};

export function FilterSelect({
  label,
  value,
  onChange,
  options,
  disabled = false,
}: Props) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-midnight/75">{label}</label>
      <div className="relative">
        <select
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none border border-sand-200 bg-white px-3 py-2.5 pr-8 text-sm text-midnight disabled:cursor-not-allowed disabled:opacity-70"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-midnight/40" />
      </div>
    </div>
  );
}

export function FilterRange({
  label,
  value,
  min,
  max,
  step,
  formatValue,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  formatValue: (value: number) => string;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-midnight/75">{label}</span>
        <span className="font-semibold text-midnight">{formatValue(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-sand-200 accent-burgundy"
      />
      <div className="mt-1 flex justify-between text-[11px] text-midnight/50">
        <span>{formatValue(min)}</span>
        <span>{formatValue(max)}</span>
      </div>
    </div>
  );
}

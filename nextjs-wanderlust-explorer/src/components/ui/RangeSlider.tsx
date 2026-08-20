"use client";

import type { ChangeEvent } from "react";

interface RangeValue {
  min: number;
  max: number;
}

interface RangeSliderProps {
  min: number;
  max: number;
  value: RangeValue;
  onChange: (value: RangeValue) => void;
}

const THUMB_CLASSES =
  "pointer-events-none absolute inset-0 h-1.5 w-full appearance-none bg-transparent " +
  "[&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 " +
  "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 " +
  "[&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-secondary [&::-webkit-slider-thumb]:shadow " +
  "[&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 " +
  "[&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white " +
  "[&::-moz-range-thumb]:bg-secondary";

export function RangeSlider({ min, max, value, onChange }: RangeSliderProps) {
  const handleMin = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...value, min: Math.min(Number(event.target.value), value.max - 1) });
  };
  const handleMax = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...value, max: Math.max(Number(event.target.value), value.min + 1) });
  };

  const minPercent = ((value.min - min) / (max - min)) * 100;
  const maxPercent = ((value.max - min) / (max - min)) * 100;

  return (
    <div>
      <div className="flex justify-between text-xs font-semibold text-neutral/70 dark:text-surface/70">
        <span>{value.min}€</span>
        <span>{value.max}€</span>
      </div>
      <div className="relative mt-3 h-1.5 rounded-full bg-primary/10 dark:bg-white/10">
        <div
          className="absolute h-1.5 rounded-full bg-secondary"
          style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
        />
        <input type="range" min={min} max={max} value={value.min} onChange={handleMin} className={THUMB_CLASSES} />
        <input type="range" min={min} max={max} value={value.max} onChange={handleMax} className={THUMB_CLASSES} />
      </div>
    </div>
  );
}

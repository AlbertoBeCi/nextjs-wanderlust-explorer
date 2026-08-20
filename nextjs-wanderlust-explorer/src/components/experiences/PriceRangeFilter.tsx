"use client";

import type { PriceRange } from "@/types";
import { RangeSlider } from "@/components/ui/RangeSlider";

interface PriceRangeFilterProps {
  bounds: PriceRange;
  value: PriceRange;
  onChange: (value: PriceRange) => void;
}

export function PriceRangeFilter({ bounds, value, onChange }: PriceRangeFilterProps) {
  return <RangeSlider min={bounds.min} max={bounds.max} value={value} onChange={onChange} />;
}

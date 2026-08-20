"use client";

interface CheckboxFilterGroupProps {
  options: readonly string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

export function CheckboxFilterGroup({ options, selected, onChange }: CheckboxFilterGroupProps) {
  const toggle = (option: string) => {
    onChange(
      selected.includes(option)
        ? selected.filter((value) => value !== option)
        : [...selected, option]
    );
  };

  return (
    <div className="flex flex-col gap-2">
      {options.map((option) => (
        <label
          key={option}
          className="flex cursor-pointer items-center gap-2 text-sm text-neutral/80 dark:text-surface/80"
        >
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => toggle(option)}
            className="h-4 w-4 rounded border-primary/30 text-secondary focus:ring-secondary"
          />
          {option}
        </label>
      ))}
    </div>
  );
}

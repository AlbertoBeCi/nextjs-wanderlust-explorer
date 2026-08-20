import { CompassIcon } from "@/components/icons/CompassIcon";
import { Button } from "@/components/ui/Button";

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel: string;
  actionHref?: string;
  onAction?: () => void;
}

export function EmptyState({
  title,
  description,
  actionLabel,
  actionHref,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-primary/20 py-16 text-center dark:border-white/20">
      <CompassIcon className="h-10 w-10 text-secondary" />
      <div>
        <p className="font-heading text-lg font-bold text-neutral dark:text-surface">{title}</p>
        <p className="mt-1 max-w-sm text-sm text-neutral/70 dark:text-surface/70">{description}</p>
      </div>
      {actionHref ? (
        <Button href={actionHref}>{actionLabel}</Button>
      ) : (
        <Button onClick={onAction}>{actionLabel}</Button>
      )}
    </div>
  );
}

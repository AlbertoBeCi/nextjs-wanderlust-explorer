import { CheckIcon } from "@/components/icons/CheckIcon";
import { Button } from "@/components/ui/Button";

interface BookingPageProps {
  searchParams: Promise<{ title?: string; people?: string; date?: string; total?: string }>;
}

export default async function BookingPage({ searchParams }: BookingPageProps) {
  const { title, people, date, total } = await searchParams;

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-6 px-4 py-24 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/15 text-secondary">
        <CheckIcon className="h-8 w-8" />
      </span>

      <h1 className="font-heading text-3xl font-bold text-neutral dark:text-surface">
        ¡Reserva confirmada!
      </h1>
      <p className="text-sm text-neutral/70 dark:text-surface/70">
        Esto es una simulación: no se ha realizado ningún cargo ni reserva real.
      </p>

      {title && (
        <div className="w-full rounded-2xl border border-primary/10 bg-white p-6 text-left shadow-sm dark:border-white/10 dark:bg-primary-elevated">
          <p className="font-heading text-lg font-bold text-neutral dark:text-surface">{title}</p>
          <dl className="mt-3 flex flex-col gap-1 text-sm text-neutral/70 dark:text-surface/70">
            {date && (
              <div className="flex justify-between">
                <dt>Fecha</dt>
                <dd>{date}</dd>
              </div>
            )}
            {people && (
              <div className="flex justify-between">
                <dt>Personas</dt>
                <dd>{people}</dd>
              </div>
            )}
            {total && (
              <div className="flex justify-between font-bold text-secondary">
                <dt>Total</dt>
                <dd>{total}€</dd>
              </div>
            )}
          </dl>
        </div>
      )}

      <Button href="/experiences">Seguir explorando</Button>
    </div>
  );
}

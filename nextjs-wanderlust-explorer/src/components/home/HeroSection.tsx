import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="bg-primary px-4 py-24 text-center text-surface">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
        <h1 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
          Descubre experiencias que cambian tu mundo
        </h1>
        <p className="text-base text-surface/80 md:text-lg">
          Desde rutas gastronómicas hasta aventuras en vela por el Mediterráneo.
        </p>
        <Button href="/experiences" className="mt-2">
          Explorar experiencias
        </Button>
      </div>
    </section>
  );
}

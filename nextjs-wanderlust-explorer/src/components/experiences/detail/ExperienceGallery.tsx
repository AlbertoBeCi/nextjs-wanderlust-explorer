import Image from "next/image";

interface ExperienceGalleryProps {
  image: string;
  title: string;
}

export function ExperienceGallery({ image, title }: ExperienceGalleryProps) {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
      <Image src={image} alt={title} fill sizes="(min-width: 1024px) 66vw, 100vw" className="object-cover" priority />
    </div>
  );
}

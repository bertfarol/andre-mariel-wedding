// components/NextPageImagePreloader.tsx
import Image from "next/image";

interface NextPageImagePreloaderProps {
  images: { src: string; width: number; height: number; alt?: string }[];
}

/**
 * Preloads images for the next page without displaying them.
 */
export default function NextPageImagePreloader({ images }: NextPageImagePreloaderProps) {
  return (
    <div style={{ display: "none" }}>
      {images.map((img) => (
        <Image
          key={img.src}
          src={img.src}
          width={img.width}
          height={img.height}
          alt={img.alt || "Preload image for next page"}
        />
      ))}
    </div>
  );
}

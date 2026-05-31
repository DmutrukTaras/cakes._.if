import { X } from "lucide-react";
import { useEffect } from "react";

type GalleryLightboxProps = {
  image: string | null;
  alt: string;
  onClose: () => void;
};

export default function GalleryLightbox({ image, alt, onClose }: GalleryLightboxProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-cocoa/82 p-4 backdrop-blur-sm" role="dialog" aria-modal="true">
      <button
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-cocoa shadow-soft"
        type="button"
        aria-label="Закрити галерею"
        onClick={onClose}
      >
        <X size={20} />
      </button>
      <img
        src={image}
        alt={alt}
        className="max-h-[84vh] max-w-[92vw] rounded-3xl object-contain shadow-soft"
      />
    </div>
  );
}

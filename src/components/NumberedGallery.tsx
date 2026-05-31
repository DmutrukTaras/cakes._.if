import { useMemo, useState } from "react";
import { supportedGalleryExtensions } from "../data/galleryConfig";
import { publicAsset } from "../utils/assets";
import GalleryLightbox from "./GalleryLightbox";
import SectionTitle from "./SectionTitle";

type NumberedGalleryProps = {
  folder: string;
  title: string;
  description?: string;
  maxImages?: number;
  extensions?: string[];
};

type CandidateImage = {
  number: number;
  extensionIndex: number;
  src: string;
};

function buildPath(folder: string, number: number, extension: string) {
  return publicAsset(`${folder}/${number}${extension}`);
}

export default function NumberedGallery({
  folder,
  title,
  description,
  maxImages = 100,
  extensions = supportedGalleryExtensions,
}: NumberedGalleryProps) {
  const [hiddenNumbers, setHiddenNumbers] = useState<number[]>([]);
  const [extensionIndexByNumber, setExtensionIndexByNumber] = useState<Record<number, number>>({});
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [loadedCount, setLoadedCount] = useState(0);

  const candidates = useMemo<CandidateImage[]>(
    () =>
      Array.from({ length: maxImages }, (_, index) => {
        const number = index + 1;
        const extensionIndex = extensionIndexByNumber[number] ?? 0;
        return {
          number,
          extensionIndex,
          src: buildPath(folder, number, extensions[extensionIndex]),
        };
      }).filter((candidate) => !hiddenNumbers.includes(candidate.number)),
    [extensionIndexByNumber, extensions, folder, hiddenNumbers, maxImages],
  );

  const handleError = (candidate: CandidateImage) => {
    const nextExtensionIndex = candidate.extensionIndex + 1;
    if (nextExtensionIndex < extensions.length) {
      setExtensionIndexByNumber((current) => ({
        ...current,
        [candidate.number]: nextExtensionIndex,
      }));
      return;
    }
    setHiddenNumbers((current) =>
      current.includes(candidate.number) ? current : [...current, candidate.number],
    );
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="Наші роботи" title={title} description={description} />
      <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {candidates.map((candidate) => (
          <button
            key={candidate.number}
            className="group aspect-[4/5] overflow-hidden rounded-3xl bg-cream shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft"
            type="button"
            onClick={() => setLightboxImage(candidate.src)}
          >
            <img
              src={candidate.src}
              alt={`${title} ${candidate.number}`}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
              onLoad={() => setLoadedCount((count) => count + 1)}
              onError={() => handleError(candidate)}
            />
          </button>
        ))}
      </div>

      {loadedCount === 0 && candidates.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-rose/10 bg-white p-10 text-center shadow-sm">
          <p className="font-serif text-2xl font-bold text-cocoa">Фото скоро з'являться</p>
          <p className="mt-3 text-sm text-cocoa/60">
            Додайте фото у відповідну папку та назвіть їх 1.jpg, 2.jpg, 3.jpg...
          </p>
        </div>
      ) : null}

      <GalleryLightbox image={lightboxImage} alt={title} onClose={() => setLightboxImage(null)} />
    </section>
  );
}

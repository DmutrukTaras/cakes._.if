import { publicAsset } from "../utils/assets";
import Button from "./Button";
import { useContactModal } from "./ContactModal";

type ProductCardProps = {
  title: string;
  description: string;
  includes?: string;
  image?: string;
  imageClass?: string;
};

const previewImages: Record<string, string> = {
  "preview-cakes": "/images/site/cakes-preview.png",
  "preview-bar": "/images/site/bar-preview.png",
  "preview-sets": "/images/site/sets-preview.png",
};

export default function ProductCard({
  title,
  description,
  includes,
  image,
  imageClass = "preview-sets",
}: ProductCardProps) {
  const { openOrder } = useContactModal();
  const fallbackImage = previewImages[imageClass];
  const displayImage = image || fallbackImage;

  return (
    <article className="overflow-hidden rounded-3xl border border-rose/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="aspect-[4/3] overflow-hidden bg-cream">
        {displayImage ? (
          <img
            src={publicAsset(displayImage)}
            alt={title}
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
            loading="lazy"
          />
        ) : null}
      </div>
      <div className="p-5">
        <h3 className="font-serif text-2xl font-bold text-cocoa">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-cocoa/65">{description}</p>
        {includes ? (
          <p className="mt-4 rounded-2xl bg-cream p-4 text-sm font-medium leading-6 text-cocoa/70">
            {includes}
          </p>
        ) : null}
        <Button variant="secondary" className="mt-5 w-full" onClick={openOrder}>
          Написати для замовлення
        </Button>
      </div>
    </article>
  );
}

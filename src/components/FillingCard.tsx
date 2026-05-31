import { useState } from "react";
import type { Filling } from "../data/fillings";
import { fillingPrices } from "../data/prices";
import { publicAsset } from "../utils/assets";

export default function FillingCard({ filling }: { filling: Filling }) {
  const [imageMissing, setImageMissing] = useState(false);
  const price = fillingPrices[filling.priceKey];

  return (
    <article className="overflow-hidden rounded-3xl border border-rose/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="aspect-[4/3] bg-cream">
        {imageMissing ? (
          <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-cream via-blush/35 to-white p-5 text-center">
            <p className="font-serif text-2xl font-bold text-cocoa">{filling.name}</p>
            <p className="mt-2 text-sm text-cocoa/55">Фото начинки можна замінити у папці</p>
          </div>
        ) : (
          <img
            src={publicAsset(filling.image)}
            alt={filling.name}
            className="h-full w-full object-cover"
            loading="lazy"
            onError={() => setImageMissing(true)}
          />
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-2xl font-bold text-cocoa">{filling.name}</h3>
          <span className="shrink-0 rounded-full bg-cream px-3 py-1 text-sm font-bold text-rose">
            {price} грн/кг
          </span>
        </div>
        <p className="mt-3 text-sm leading-6 text-cocoa/65">{filling.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {filling.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-blush/35 px-3 py-1 text-xs font-semibold text-cocoa/70">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

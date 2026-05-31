export const supportedGalleryExtensions = [
  ".jpg",
  ".jpeg",
  ".png",
  ".JPG",
  ".JPEG",
  ".PNG",
];

export const galleryConfig = {
  cakes: {
    folder: "/gallery/cakes",
    title: "Галерея тортів",
    description: "Фото з весіль, днів народження та маленьких домашніх свят.",
    maxImages: 100,
    extensions: supportedGalleryExtensions,
  },
  bar: {
    folder: "/gallery/bar",
    title: "Галерея кенді-бару",
    description: "Порційні десерти, які красиво доповнюють подію.",
    maxImages: 100,
    extensions: supportedGalleryExtensions,
  },
  sets: {
    folder: "/gallery/sets",
    title: "Галерея наборів",
    description: "Подарункові бокси та солодкі компліменти.",
    maxImages: 100,
    extensions: supportedGalleryExtensions,
  },
};

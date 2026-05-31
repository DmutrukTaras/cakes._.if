import type { FillingPriceKey } from "./prices";

export type Filling = {
  slug: string;
  name: string;
  description: string;
  tags: string[];
  image: string;
  priceKey: FillingPriceKey;
};

export const fillingFilters = [
  "шоколадні",
  "ягідні",
  "фруктові",
  "горіхові",
  "карамельні",
  "легкі",
  "преміальні",
];

export const fillings: Filling[] = [
  {
    slug: "dubai-chocolate",
    name: "Дубайський шоколад",
    description:
      "Вологий шоколадний бісквіт, крем на основі молочного шоколаду, фісташкова начинка з тістом катаїфі.",
    tags: ["шоколадні", "фісташкова", "преміальні", "насичена"],
    image: "/images/fillings/dubai-chocolate.png",
    priceKey: "dubaiChocolate",
  },
  {
    slug: "coffee-hazelnut",
    name: "Кава-фундук",
    description:
      "Шоколадний бісквіт з кавовою пропиткою, карамель з цілим фундуком, кавовий мус і карамельний крем.",
    tags: ["кавова", "горіхові", "карамельні", "насичена"],
    image: "/images/fillings/coffee-hazelnut.png",
    priceKey: "coffeeHazelnut",
  },
  {
    slug: "banana-chocolate",
    name: "Банан в шоколаді",
    description:
      "Вологий бісквіт, мус на основі молочного шоколаду та банану, шоколадний крем.",
    tags: ["бананова", "шоколадні", "ніжна"],
    image: "/images/fillings/banana-chocolate.png",
    priceKey: "bananaChocolate",
  },
  {
    slug: "plombir-lemon",
    name: "Пломбір-лимон",
    description:
      "Макові коржі, лимонний курд і ніжний вершковий крем на основі білого шоколаду.",
    tags: ["лимонна", "макова", "вершкова", "свіжа"],
    image: "/images/fillings/plombir-lemon.png",
    priceKey: "plombirLemon",
  },
  {
    slug: "rafaello",
    name: "Рафаелло",
    description:
      "Кокосові коржі, вершковий крем, кокосова начинка на основі білого шоколаду та мигдалю.",
    tags: ["кокосова", "мигдальна", "білий шоколад", "ніжна"],
    image: "/images/fillings/rafaello.png",
    priceKey: "rafaello",
  },
  {
    slug: "hazelnut-pear",
    name: "Фундук — карамелізована груша",
    description:
      "Мигдалеві коржі, карамелізована груша, фундуковий шоколадний мус і карамельний крем.",
    tags: ["грушева", "горіхові", "карамельні", "мигдальна"],
    image: "/images/fillings/hazelnut-pear.png",
    priceKey: "hazelnutPear",
  },
  {
    slug: "blueberry",
    name: "Чорниця — лохина",
    description:
      "Маковий бісквіт, чорничний чізкейк, конфітюр з лохини, вершковий крем.",
    tags: ["ягідні", "чорнична", "макова", "ніжна"],
    image: "/images/fillings/blueberry.png",
    priceKey: "blueberry",
  },
  {
    slug: "strawberry-pistachio",
    name: "Полуниця — фісташка",
    description:
      "Фісташковий бісквіт, полуничне компоте та фісташковий ганаш.",
    tags: ["полунична", "фісташкова", "ягідні", "преміальні"],
    image: "/images/fillings/strawberry-pistachio.png",
    priceKey: "strawberryPistachio",
  },
  {
    slug: "red-velvet-cherry",
    name: "Червоний оксамит з вишнями",
    description:
      "Ніжний бісквіт, вишневе компоте, повітряний вершковий крем.",
    tags: ["вишнева", "вершкова", "класична", "ніжна"],
    image: "/images/fillings/red-velvet-cherry.png",
    priceKey: "redVelvetCherry",
  },
  {
    slug: "snickers",
    name: "Снікерс",
    description:
      "Вологі шоколадні коржі, солона карамель з арахісом, шоколадний крем.",
    tags: ["шоколадні", "арахісова", "карамельні", "солодко-солона"],
    image: "/images/fillings/snickers.png",
    priceKey: "snickers",
  },
  {
    slug: "raspberry",
    name: "Малина",
    description:
      "Ванільний бісквіт, малинове кулі, повітряний вершковий крем.",
    tags: ["малинова", "ванільна", "ягідні", "легкі"],
    image: "/images/fillings/raspberry.png",
    priceKey: "raspberry",
  },
  {
    slug: "ferrero-rocher",
    name: "Ферреро Роше",
    description:
      "Вологі шоколадні коржі, крем на основі молочного шоколаду, шоколадний чізкейк, карамель з горішками, ром.",
    tags: ["шоколадні", "горіхові", "карамельні", "преміальні"],
    image: "/images/fillings/ferrero-rocher.png",
    priceKey: "ferreroRocher",
  },
  {
    slug: "mango-peach",
    name: "Манго — персик",
    description:
      "Ванільний бісквіт, мангова начинка, крем на основі персикового пюре.",
    tags: ["фруктові", "мангова", "персикова", "легкі"],
    image: "/images/fillings/mango-peach.png",
    priceKey: "mangoPeach",
  },
  {
    slug: "oreo",
    name: "Oreo",
    description:
      "Вологий шоколадний бісквіт, крем на основі шоколаду та печива Oreo.",
    tags: ["шоколадні", "Oreo", "ніжна", "популярна"],
    image: "/images/fillings/oreo.png",
    priceKey: "oreo",
  },
];

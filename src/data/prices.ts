export const fillingPrices = {
  dubaiChocolate: 1000,
  coffeeHazelnut: 900,
  bananaChocolate: 850,
  plombirLemon: 875,
  rafaello: 950,
  hazelnutPear: 900,
  blueberry: 900,
  strawberryPistachio: 950,
  redVelvetCherry: 875,
  snickers: 850,
  raspberry: 800,
  ferreroRocher: 900,
  mangoPeach: 875,
  oreo: 800,
} as const;

export type FillingPriceKey = keyof typeof fillingPrices;

export const priceNote =
  "Ціни можуть змінюватися. Актуальну вартість уточнюйте при замовленні.";

# cake._.if

Статичний сайт-вітрина для авторської кондитерської в Івано-Франківську.

Сайт зроблено на Vite, React, TypeScript, Tailwind CSS і React Router. Тут немає backend, checkout, кошика або форми замовлення. Основна дія відвідувача - перейти в Instagram, Telegram, Viber або зателефонувати.

## Як встановити залежності

```bash
npm install
```

## Як запустити локально

```bash
npm run dev
```

Після запуску відкрийте адресу, яку покаже Vite, зазвичай `http://127.0.0.1:5173`.

## Як зробити build

```bash
npm run build
```

Готові файли з'являться у папці `dist`.

## GitHub Pages

У `vite.config.ts` є налаштування:

```ts
base: process.env.VITE_BASE_PATH || "/"
```

Якщо сайт публікується в репозиторії `my-cakes`, для GitHub Pages можна запускати build так:

```bash
$env:VITE_BASE_PATH="/my-cakes/"; npm run build
```

Для User/Organization Pages, наприклад `username.github.io`, зазвичай залишають `base: "/"`.

## Як змінити контакти

Відкрийте `src/data/siteConfig.ts` і змініть:

- Instagram
- Telegram
- Viber
- телефон
- місто
- графік
- тексти кнопок

Компоненти редагувати не потрібно.

## Як змінити тексти

Відкрийте `src/data/pagesContent.ts` і змініть потрібні заголовки, описи або CTA.

## Як змінити ціни

Відкрийте `src/data/prices.ts` і змініть потрібне значення. Ціни начинок не захардкоджені в компонентах.

## Як додати FAQ

Відкрийте `src/data/faq.ts` і додайте новий об'єкт:

```ts
{
  category: "cakes",
  question: "Ваше питання?",
  answer: "Відповідь українською мовою."
}
```

Доступні категорії: `cakes`, `bar`, `sets`, `orders`.

## Як додавати фото в галереї

Для тортів додайте фото в:

```text
public/gallery/cakes
```

Для наборів:

```text
public/gallery/sets
```

Для кенді-бару:

```text
public/gallery/bar
```

Назвіть фото наступним номером:

```text
1.jpg
2.jpg
3.jpg
```

Підтримуються формати:

- `.jpg`
- `.jpeg`
- `.png`
- `.JPG`
- `.JPEG`
- `.PNG`

Галерея перевіряє номери від `1` до `100`. Якщо фото не існує, воно просто не показується.

## Як замінити фото начинок

Відкрийте:

```text
public/images/fillings
```

Замініть потрібний файл, зберігши таку саму назву. Наприклад, щоб замінити фото начинки Oreo, додайте або замініть файл:

```text
oreo.png
```

Якщо фото начинки ще немає, сайт покаже красиву заглушку з назвою начинки.

## Основні файли з контентом

- `src/data/siteConfig.ts` - бренд, контакти, місто, CTA.
- `src/data/pagesContent.ts` - тексти сторінок.
- `src/data/fillings.ts` - список начинок.
- `src/data/prices.ts` - ціни.
- `src/data/faq.ts` - питання й відповіді.
- `src/data/categories.ts` - категорії сайту.
- `src/data/galleryConfig.ts` - налаштування галерей.

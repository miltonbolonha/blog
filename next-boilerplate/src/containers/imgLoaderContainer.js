"use client";

export default function myImageLoader({ src, width, height, quality }) {
  const objReturn = `${src || "placeholder.png"}?w=${width || 150}&h=${
    height || 150
  }&q=${quality || 100}`;

  return `${objReturn}`;
}

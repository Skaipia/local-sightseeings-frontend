"use client";

import Image from "next/image";
import s from "./styles.module.css"

const images = [
  "/test-sight-card.png",
  "/test-sight-card.png",
  "/test-sight-card.png",
  "/test-sight-card.png",
  "/test-sight-card.png",
  "/test-sight-card.png",
  "/test-sight-card.png",
  "/test-sight-card.png",
  "/test-sight-card.png",
];

export default function Gallery() {
  return (
    <div className={s.gallery}>
      {images.map((image, index) => (
        <div
          key={index}
          className={s.galleryItem}
        >
          <Image
            src={image}
            alt={`gallery-${index}`}
            fill
            className={s.galleryImage}
          />
        </div>
      ))}
    </div>
  );
}
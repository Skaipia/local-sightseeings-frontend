"use client";

import Image from "next/image";
import s from "./styles.module.css"


interface IGallery {
  images: { alt?: string; url: string }[];}

export default function Gallery({ images }: IGallery) {
  return (
    <div className={s.gallery}>
      {images.map((image, index) => (
        <div
          key={index}
          className={s.galleryItem}
        >
          <Image
            src={image.url}
            alt={image.alt || `gallery-${index}`}
            fill
            className={s.galleryImage}
          />
        </div>
      ))}
    </div>
  );
}
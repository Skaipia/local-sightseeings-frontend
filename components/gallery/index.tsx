"use client";

import Image from "next/image";
import s from "./styles.module.css"


interface IGallery {
  images: { alt?: string; url: string }[];}

// TODO: Протестить, будут ли отображаться картинки, переданные как url
// TODO: Картинки в целом подтормаживают с загрузкой (сильно)
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
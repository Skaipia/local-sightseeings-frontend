"use client";

import Image from "next/image";
import s from "./styles.module.css"


interface IGallery {
  images: { alt?: string; url: string }[];}

// TODO: Протестить, будут ли отображаться картинки, переданные как url (уточнить)
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
            quality={75}
            priority={index < 3}
            sizes="(max-width: 768px) 50vw, 33vw" 
          />
        </div>
      ))}
    </div>
  );
}
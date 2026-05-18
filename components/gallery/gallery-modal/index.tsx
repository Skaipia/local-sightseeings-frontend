import Image from "next/image"
import s from "./styles.module.css"

export const GalleryModal = () => {
  return (<div className={s.wrapper}>
    <div className={s.modal}>
    <Image />
    </div>
  </div>)
}
import { FC } from 'react';
import s from './styles.module.css';
import Image from 'next/image';
import cn from 'classnames';

interface SightCardProps {
  imageUrl: string;
  sightName: string;
  sightShortDescription: string;
  sightLocation: string;
}

export const SightCard: FC<SightCardProps> = ({ imageUrl, sightName, sightShortDescription, sightLocation }) => {
  return (
    <article className={s.card}>
      <Image className={s.image} src={imageUrl} alt={sightShortDescription} width={212} height={128} />
      <h3 className={cn(s['text-md'], s.title)}>{sightName}</h3>
      <p className={cn(s['text-lg'], s.description)}>{sightShortDescription}</p>
      <p className={cn(s['text-md'], s.location)}>{sightLocation}</p>
    </article>
  );
};

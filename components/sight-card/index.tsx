import { FC } from 'react';
import s from './styles.module.css';
import Image from 'next/image';
import cn from 'classnames';
import Link from 'next/link';
import { SightT } from '@/app/types/sight';

interface SightCardProps {
  sight: SightT;
}

export const SightCard: FC<SightCardProps> = ({ sight }) => {
  const { id, title, description, location, imageUrl } = sight;
  return (
    <article className={s.card}>
      <Link href={`/sightseeings/${id}`} className="link-around" data-description="на страницу достопримечательности" />
      <Image className={s.image} src={imageUrl} alt={description} width={212} height={128} />
      <h3 className={cn('text-md', s.title)}>{title}</h3>
      <p className={cn('text-lg', s.description)}>{description}</p>
      <p className={cn('text-md', s.location)}>{location}</p>
    </article>
  );
};

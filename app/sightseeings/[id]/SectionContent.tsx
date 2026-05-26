import { FC } from 'react';
import { SightExtendedT } from '@/app/types/sight';
import { SectionId } from './constants';
import { Audio } from '@/components/audio';
import Gallery from '@/components/gallery';
import { YandexMap } from '@/components/map';
import { SightCard } from '@/components/sight-card/index';
import { CardsGrid } from '@/components/CardsGrid/index';

export interface SectionContentProps {
  active: SectionId;
  sight: SightExtendedT;
}

export const SectionContent: FC<SectionContentProps> = ({ active, sight }) => {
  const {
    location,
    title,
    address,
    openingHours,
    phoneNumber,
    website,
    imageUrl,
    videos,
    gallery,
    facts = [],
    historyParagraphs = [],
    price,
    legends = [],
  } = sight;


  // TODO: Ивенты будут браться с бэкенда, убрать хардкод
  if (active === 'info') {
    return (
      <div className="max-w-[680px] text-[14px] leading-[1.45] text-[#171717] md:text-[18px]">
        <div className="mb-10 space-y-6">
          <p className="flex items-center gap-5">
            <InfoIcon type="pin" />
            <span>{address}</span>
          </p>
          <p className="flex items-center gap-5">
            <InfoIcon type="clock" />
            <span>{openingHours}</span>
          </p>
          { phoneNumber && <p className="flex items-center gap-5">
            <InfoIcon type="phone" />
            <a href={`tel:${phoneNumber}`} className="hover:underline">
              {phoneNumber}
            </a>
          </p> }
          { website && <p className="flex items-center gap-5">
            <InfoIcon type="web" />
            <a href={website} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {website}
            </a>
          </p>
          }
        </div>
        {/*<p className="mb-6">*/}
        {/*  <strong>Что проходит:</strong> экскурсии, выставки.*/}
        {/*</p>*/}
        <p>
          <strong>Стоимость:</strong> {price || 'уточнять на официальном сайте.'}
        </p>
      </div>
    );
  }
  if (active === 'facts') {
    return (
      <ul className="max-w-[720px] list-disc space-y-5 pl-5 text-[14px] leading-[1.35] text-[#171717] md:text-[18px]">
        {facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
    );
  }

  // TODO: Цитата должна быть в ответе с бэкенда, не хардкод
  if (active === 'history') {
    return (
      <div className="max-w-[720px] text-[14px] leading-[1.35] text-[#171717] md:text-[18px]">
        {/*<p className="mx-auto mb-10 max-w-[360px] text-center">«Ульянов родился в Симбирске, а Ленин — в Самаре»</p>*/}
        <div className="space-y-5">
          {historyParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    );
  }
  if (active === 'legends') {
    return (
      <div className="max-w-[720px] space-y-5 text-[14px] leading-[1.45] text-[#171717] md:text-[18px]">
        {legends.map((legend) => (
          <p key={legend}>{legend}</p>
        ))}
      </div>
    );
  }

  // TODO: Поменять заглушки
  // TODO: Разобраться со способом вставки видео
  if (active === 'videos') {
    return (
      <div className="space-y-9">
        {sight.videos?.map(({ part, url }) => (
          <article className="w-full" key={`${part}${url}`}>
            <h3 className="mb-4 text-[14px] font-normal text-[#171717] md:text-[16px]">{part}</h3>
        {/*    <div className="relative aspect-video w-full max-w-[680px] overflow-hidden bg-[#d8d3c8]">*/}
        {/*      <img*/}
        {/*        src="/images/place/video-page.jpg"*/}
        {/*        alt="Видео-экскурсия по дому-музею Ленина"*/}
        {/*        className="h-full w-full object-cover object-[50%_45%]"*/}
        {/*      />*/}
        {/*      <video src={url} autoPlay poster="posterimage.jpg">*/}
        {/*        Sorry, your browser doesn&apos;t support embedded videos, but don&apos;t worry, you can*/}
        {/*        <a href={url}>download it</a>*/}
        {/*        and watch it with your favorite video player!*/}
        {/*      </video>*/}
        {/*    </div>*/}
            <iframe
              width="720"
              height="405"
              src="https://rutube.ru/play/embed/756a86d75816b1da427886a10a22ae86"
              allow="clipboard-write; autoplay"
              allowFullScreen
            ></iframe>
          </article>
        ))}

      </div>
    );
  }

  if (active === 'audios') {
    return (
      <div className="space-y-9">
        {sight.audios?.map(({ part, url }) => (
          <div key={`${part}${url}`}>
            {part && <p className="text-[21px] mb-4 font-bold">{part}</p>}
            <Audio src={url} />
          </div>
        ))}
      </div>
    );
  }
  if (active === 'gallery' && gallery) {
    return <Gallery images={gallery} />;
  }

  if (active === 'map' && sight.map) {
    return <YandexMap center={sight.map.center} zoom={sight.map.zoom || 9} points={sight.map.places} />;
  }
  if (active === 'sightPlaces' && sight.sightPlaces) {
    return (
      <CardsGrid>
        {sight.sightPlaces.map((place) => (
          <SightCard key={place.id} sight={place} />
        ))}
      </CardsGrid>
    );
  }
  if (active === 'nearby' && sight.nearby) {
    return (
      <CardsGrid>
        {sight.nearby.map((place) => (
          <SightCard key={place.id} sight={place} />
        ))}
      </CardsGrid>
    );
  }
  return null;
};

function InfoIcon({ type }: { type: 'pin' | 'clock' | 'phone' | 'web' }) {
  const common = 'h-6 w-6 shrink-0 stroke-[#171717]';
  if (type === 'pin') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    );
  }
  if (type === 'clock') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v6l4 2" />
      </svg>
    );
  }
  if (type === 'phone') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 1.9Z" />
      </svg>
    );
  }
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}

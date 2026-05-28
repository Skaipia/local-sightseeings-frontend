'use client';
// TODO: если перевести fetch на серверный компонент (убрать 'use client'), можно удалить
// useEffect/useState для data и fetching — Next.js App Router поддерживает async page компоненты.
// 'use client' тогда останется только у интерактивных частей (навигация по секциям).
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import { SightExtendedT } from '@/app/types/sight';
import { mockSightsList } from '../_data';
import { SectionContent } from './SectionContent';
import { SectionId } from './constants';
import { Loader } from '@/components/Loader';
import Image from 'next/image';

export default function SightseeingDetailPage() {
  const [active, setActive] = useState<SectionId>('info');

  // TODO: деструктурировать сразу с типом: const { id } = useParams<{ id: string }>()
  // Так id сразу будет string, а не string | string[], и промежуточная переменная params не нужна.
  const params = useParams();
  const id = params.id;

  const [data, setData] = useState<SightExtendedT>();
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
 
    // TODO: если оставляем на клиенте, то fetch-логику лучше вынести в кастомный хук useSightDetail(id) —
    // компонент не должен знать о деталях получения данных.
    
    new Promise<SightExtendedT | undefined>((res) => {
      setFetching(true);
      setTimeout(() => {
        // TODO: при подключении бэкенда заменить на реальный fetch по id из IRequest { id: string }
        // TODO: убрать фолбек на mockSightsList[2] — при отсутствии объекта показывать страницу 404
        res(mockSightsList.find((sight) => sight.id === id) || mockSightsList[2]);
      }, 2000);
    })
      .then((received) => {
        setData(received);
      })
      .finally(() => {
        setFetching(false);
      });
  }, [id]);

  // TODO: заменить императивный список с push на декларативный фильтр константного конфига:
  //   const SECTION_CONFIG: Array<{ id: SectionId; label: string; show: (d: SightExtendedT) => boolean }> = [
  //     { id: 'info',        label: 'Общая информация', show: () => true },
  //     { id: 'facts',       label: 'Факты',            show: (d) => !!d.facts?.length },
  //     { id: 'history',     label: 'История',          show: (d) => !!d.historyParagraphs?.length },
  //     ...
  //   ];
  //   const sections = useMemo(() => SECTION_CONFIG.filter((s) => s.show(data)), [data]);
  // Конфиг вынести в constants.ts — компонент тогда станет на ~25 строк короче.
  const sections = useMemo(() => {
    const list: Array<{ id: SectionId; label: string }> = [{ id: 'info', label: 'Общая информация' }];
    if (data?.facts?.length) {
      list.push({ id: 'facts', label: 'Факты' });
    }
    // TODO: после перехода на ICardResponse заменить historyParagraphs на history?.items
    if (data?.historyParagraphs?.length) {
      list.push({ id: 'history', label: 'История' });
    }
    if (data?.legends?.length) {
      list.push({ id: 'legends', label: 'Легенды' });
    }
    if (data?.videos?.length) {
      list.push({ id: 'videos', label: 'Видео-экскурсия' });
    }
    if (data?.audios?.length) {
      list.push({ id: 'audios', label: 'Аудиогид' });
    }
    if (data?.gallery?.length) {
      list.push({ id: 'gallery', label: 'Галерея' });
    }
    if (data?.map) {
      list.push({ id: 'map', label: 'На карте' });
    }
    if (data?.sightPlaces?.length) {
      list.push({ id: 'sightPlaces', label: 'Входит в маршрут' });
    }
    if (data?.nearby?.length) {
      list.push({ id: 'nearby', label: 'Рядом' });
    }
    return list;
  }, [data]);

  // TODO: в Next.js App Router состояние загрузки вроде можно вынести в файл loading.tsx рядом с page.tsx —
  // фреймворк подхватит его автоматически и уберёт необходимость в ручном if (fetching).
  if (fetching) {
    return (
      <article className="bg-background flex min-h-[70vh]">
        <Loader fullHeight />
      </article>
    );
  }

  // TODO: вместо return null возможно стоит показать 404-страницу
  if (!data) {
    return null;
  }

  return (
    <article className="min-h-screen bg-background">
      <section className="w-full">
        <Image
          src={data.imageUrl}
          alt={data.title}
          width={1600}
          height={900}
          className="h-[407px] w-full object-cover object-[32%_50%] md:h-[360px] md:object-[50%_50%] lg:h-[620px]"
        />
      </section>
      <section className="container mx-auto max-w-[1440px] px-5 pb-24 pt-8 md:px-8 md:pt-14 lg:pb-28">
        <h1 className="mb-8 max-w-[1060px] text-[28px] font-semibold leading-[1.15] text-[#0B1215] md:mb-12 md:text-[54px] lg:text-[64px]">
          {data.title}
        </h1>
        {/* TODO: кнопки навигации продублированы в десктопном и мобильном блоках.
            Можно вынести в отдельный компонент NavButton({ section, isActive, onClick })
            и переиспользовать в обоих местах. */}
        <div className="hidden grid-cols-[260px_minmax(0,1fr)] gap-20 md:grid lg:grid-cols-[300px_minmax(0,1fr)]">
          <nav className="flex flex-col items-start gap-7">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => setActive(section.id)}
                className={`text-left text-[20px] font-semibold leading-tight transition-colors lg:text-[24px] ${
                  active === section.id ? 'text-[#217EA6]' : 'text-[#171717] hover:text-[#217EA6]'
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
          <div className="pt-1">
            <SectionContent active={active} sight={data} />
          </div>
        </div>
        <div className="md:hidden">
          <div className="space-y-7">
            {sections.map((section) => (
              <section key={section.id}>
                <button
                  type="button"
                  onClick={() => setActive(section.id)}
                  className={`text-left text-[16px] font-semibold leading-tight transition-colors ${
                    active === section.id ? 'text-[#217EA6]' : 'text-[#171717]'
                  }`}
                >
                  {section.label}
                </button>
                {active === section.id && (
                  <div className="mt-5">
                    {/* TODO: SectionContent сейчас рендерится отдельно в десктопе и мобайле.
                        На мобилках он рендерится внутри каждого section.map — при смене active
                        предыдущий контент размонтируется, а новый монтируется заново.
                        Можно вынести один <SectionContent> ниже списка и управлять видимостью через CSS,
                        чтобы избежать лишних mount/unmount. */}
                    <SectionContent active={active} sight={data} />
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

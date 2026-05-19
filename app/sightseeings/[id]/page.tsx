'use client';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import { SightExtendedT } from '@/app/types/sight';
import { mockSightsList } from '../_data';
import { SectionContent } from './SectionContent';
import { SectionId } from './constants';
import { Loader } from '@/components/Loader';

export default function SightseeingDetailPage() {
  const [active, setActive] = useState<SectionId>('info');
  const params = useParams();
  const id = params.id;
  const [data, setData] = useState<SightExtendedT>();
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    // TODO fetch
    new Promise<SightExtendedT | undefined>((res) => {
      setFetching(true);
      setTimeout(() => {
        res(mockSightsList.find((sight) => sight.id === id));
      }, 2000);
    })
      .then((received) => {
        setData(received);
      })
      .finally(() => {
        setFetching(false);
      });
  }, [id]);

  const sections = useMemo(() => {
    const list: Array<{ id: SectionId; label: string }> = [{ id: 'info', label: 'Общая информация' }];
    if (data?.facts?.length) {
      list.push({ id: 'facts', label: 'Факты' });
    }
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

  if (fetching) {
    return (
      <article className="bg-background flex min-h-[70vh]">
        <Loader fullHeight />
      </article>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <article className="min-h-screen bg-background">
      <section className="w-full">
        <img
          src="/images/place/hero.jpg"
          alt="Дом-Музей В.И. Ленина"
          className="h-[407px] w-full object-cover object-[32%_50%] md:h-[360px] md:object-[50%_50%] lg:h-[620px]"
        />
      </section>
      <section className="container mx-auto max-w-[1440px] px-5 pb-24 pt-8 md:px-8 md:pt-14 lg:pb-28">
        <h1 className="mb-8 max-w-[1060px] text-[28px] font-semibold leading-[1.15] text-[#0B1215] md:mb-12 md:text-[54px] lg:text-[64px]">
          {data.title}
        </h1>
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

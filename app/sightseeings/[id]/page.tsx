'use client';
import { useState } from 'react';
type SectionId = 'info' | 'facts' | 'history' | 'legends' | 'video';
const sections: Array<{ id: SectionId; label: string }> = [
  { id: 'info', label: 'Общая информация' },
  { id: 'facts', label: 'Факты' },
  { id: 'history', label: 'История' },
  { id: 'legends', label: 'Легенды' },
  { id: 'video', label: 'Видео-экскурсия' },
];
const facts = [
  '«Ульянов родился в Симбирске, а Ленин — в Самаре»',
  'Дом-музей им. В.И. Ленина начал свою работу 3 января 1940г.',
  'Он расположен в историческом здании под номером 135, построенном в конце 19 века, на пересечении улиц Ленинской и Рабочей.',
  'Ранее здесь жил купец второй гильдии Илья Рытиков, где на первом этаже размещалась его торговая лавка.',
  'Также на первом этаже в остальной части жил сам Рытиков с семьей. Второй этаж он сдавал квартирантам, первыми из них были семья Ульяновых.',
  'В Самару Ульяновы перебрались из Казани после участия Ленина в студенческих волнениях.',
];
const historyParagraphs = [
  'Дом-музей им. В.И. Ленина начал свою работу 3 января 1940г.',
  'Он расположен в историческом здании под номером 135, построенном в конце 19 века, на пересечении улиц Ленинской и Рабочей (ранее Сокольничьей и Почтовой).',
  'Ранее здесь жил купец второй гильдии Илья Рытиков, где на первом этаже размещалась его торговая лавка, где можно было приобрести вина, чай, кофе, сигары, специи и многое другое.',
  'Также на первом этаже в остальной части жил сам Рытиков с семьей. Второй этаж он сдавал квартирантам, первыми из них были семья Ульяновых.',
  'В Самару Ульяновы перебрались из Казани после участия Ленина в студенческих волнениях, за что он попал под строгий надзор полиции и был отчислен из Казанского университета.',
  'Ульяновы уехали из Самары в августе 1893 года. Сама семья отправилась в Москву, а Владимир Ильич в Санкт-Петербург, чтобы продолжить свою политическую деятельность.',
  'Музей после масштабной реконструкции расширил свои границы и сегодня включает 2 соседних здания, соединенные подземным переходом.',
  'Здесь можно увидеть мебель, личные вещи, книги, фотографии и документы. Мемориальная комната воссоздана максимально приближенно к тому, какой она была во время проживания семьи Ульяновых.',
  'В теплое время года работает экспозиция под открытым небом «Картины прошлого усадьбы городской».',
];
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
function VideoCard({ part }: { part: string }) {
  return (
    <article className="w-full">
      <h3 className="mb-4 text-[14px] font-normal text-[#171717] md:text-[16px]">{part}</h3>
        <div className="relative aspect-video w-full max-w-[680px] overflow-hidden bg-[#d8d3c8]">
            <img
                src="/images/place/video-page.jpg"
                alt="Видео-экскурсия по дому-музею Ленина"
                className="h-full w-full object-cover object-[50%_45%]"
            />
            <video src="https://rutube.ru/video/2da46f86775ec5f6b9589377059dc359/" autoPlay poster="posterimage.jpg">
                Sorry, your browser doesn't support embedded videos, but don't worry, you can
                <a href="https://rutube.ru/video/2da46f86775ec5f6b9589377059dc359/">download it</a>
                and watch it with your favorite video player!
            </video>

        </div>
    </article>
  );
}
function SectionContent({active}: { active: SectionId }) {
    if (active === 'info') {
        return (
            <div className="max-w-[680px] text-[14px] leading-[1.45] text-[#171717] md:text-[18px]">
                <div className="mb-10 space-y-6">
          <p className="flex items-center gap-5">
            <InfoIcon type="pin" />
            <span>ул. Ленина, д. 70</span>
          </p>
          <p className="flex items-center gap-5">
            <InfoIcon type="clock" />
            <span>ПН-ПТ с 9:00 до 18:30</span>
          </p>
          <p className="flex items-center gap-5">
            <InfoIcon type="phone" />
            <span>+7 (938) 401-03-56</span>
          </p>
          <p className="flex items-center gap-5">
            <InfoIcon type="web" />
            <span>leninmemorial.ru</span>
          </p>
        </div>
        <p className="mb-6">
          <strong>Что проходит:</strong> экскурсии, выставки.
        </p>
        <p>
          <strong>Стоимость:</strong> уточнять на официальном сайте.
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
  if (active === 'history') {
    return (
      <div className="max-w-[720px] text-[14px] leading-[1.35] text-[#171717] md:text-[18px]">
        <p className="mx-auto mb-10 max-w-[360px] text-center">«Ульянов родился в Симбирске, а Ленин — в Самаре»</p>
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
        <p>
          Говорят, что в доме на Ленинской до сих пор легко представить жизнь старой Самары: шум лавки на первом этаже,
          скрип лестницы, разговоры жильцов и вечерний свет в окнах деревянного особняка.
        </p>
        <p>
          Для многих горожан это место стало не только музеем, но и символом памяти о городе конца XIX века, где рядом
          существовали купеческий быт, студенческие споры и семейные истории.
        </p>
      </div>
    );
  }
  return (
    <div className="space-y-9">
      <VideoCard part="Часть 1" />
      <VideoCard part="Часть 2" />
    </div>
  );
}
export default function SightseeingDetailPage() {
  const [active, setActive] = useState<SectionId>('info');
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
          Дом-Музей В.И. Ленина
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
            <SectionContent active={active} />
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
                    <SectionContent active={active} />
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

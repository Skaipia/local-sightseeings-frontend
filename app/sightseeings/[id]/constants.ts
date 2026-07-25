import { SightExtendedT } from "@/app/types/sight";

export type SectionId = 'info' | 'facts' | 'history' | 'legends' | 'videoTours' | 'audios' | 'gallery' | 'map' | 'sightPlaces' | 'nearby';

// TODO: после перехода на ICardResponse заменить historyParagraphs на history?.items
export const SECTION_CONFIG: Array<{
  id: SectionId;
  label: string;
  show: (data: SightExtendedT) => boolean;
}> = [
  { id: 'info', label: 'Общая информация', show: () => true },
  { id: 'facts', label: 'Факты', show: (d) => !!d?.facts?.length },
  { id: 'history', label: 'История', show: (d) => !!d?.historyParagraphs?.length },
  { id: 'legends', label: 'Легенды', show: (d) => !!d?.legends?.length },
  { id: 'videoTours', label: 'Видео-экскурсия', show: (d) => !!d?.videoTours?.length },
  { id: 'audios', label: 'Аудиогид', show: (d) => !!d?.audios?.length },
  { id: 'gallery', label: 'Галерея', show: (d) => !!d?.gallery?.length },
  { id: 'map', label: 'На карте', show: (d) => !!d?.map },
  { id: 'sightPlaces', label: 'Входит в маршрут', show: (d) => !!d?.sightPlaces?.length },
  { id: 'nearby', label: 'Рядом', show: (d) => !!d?.nearby?.length },
];
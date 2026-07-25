import { FilterItem } from '@/components/catalog-filter';

export const locationOptions: FilterItem[] = [
  { key: 'all', label: 'Все' },
  { key: 'tolyatti', label: 'Тольятти' },
  { key: 'samara', label: 'Самара' },
  { key: 'neftegorsk', label: 'Нефтегорск' },
  { key: 'city1', label: 'Город1' },
  { key: 'city2', label: 'Город2' },
];

export const categoryOptions: FilterItem[] = [
  { key: 'all', label: 'Все' },
  { key: 'arches_and_gates', label: 'Арки и ворота' },
  { key: 'libraries', label: 'Библиотеки' },
  { key: 'waterfalls', label: 'Водопады' },
  { key: 'embankments', label: 'Набережные' },
  { key: 'cliffs', label: 'Скалы' },
];

export const interestByOptions: FilterItem[] = [
  { key: 'all', label: 'Всем' },
  { key: 'children', label: 'Детям' },
  { key: 'teenagers', label: 'Подросткам' },
  { key: 'adults', label: 'Взрослым' },
  { key: 'seniors', label: 'Пенсионерам' },
];

export const openingHoursOptions: FilterItem[] = [
  { key: 'all', label: 'Все' },
  { key: '24_7', label: 'Круглосуточно' },
  { key: 'open', label: 'Открыто' },
];

export const priceOptions: FilterItem[] = [
  { key: 'all', label: 'Все' },
  { key: 'paid', label: 'Платно' },
  { key: 'free', label: 'Бесплатно' },
];

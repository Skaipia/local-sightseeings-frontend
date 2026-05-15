import { FilterItem } from '@/components/catalog-filter';

export const locationOptions: FilterItem[] = [
  { id: '1', label: 'Все' },
  { id: '2', label: 'Тольятти' },
  { id: '3', label: 'Самара' },
  { id: '4', label: 'Нефтегорск' },
  { id: '5', label: 'Город1' },
  { id: '6', label: 'Город2' },
];

export const categoryOptions: FilterItem[] = [
  { id: '1', label: 'Все' },
  { id: '2', label: 'Арки и ворота' },
  { id: '3', label: 'Библиотеки' },
  { id: '4', label: 'Водопады' },
  { id: '5', label: 'Набережные' },
  { id: '6', label: 'Скалы' },
];

export const interestByOptions: FilterItem[] = [
  { id: '1', label: 'Всем' },
  { id: '2', label: 'Детям' },
  { id: '3', label: 'Подросткам' },
  { id: '4', label: 'Взрослым' },
  { id: '5', label: 'Пенсионерам' },
];

export const openingHoursOptions: FilterItem[] = [
  { id: '1', label: 'Все' },
  { id: '2', label: 'Круглосуточно' },
  { id: '3', label: 'Открыто' },
];

export const priceOptions: FilterItem[] = [
  { id: '1', label: 'Все' },
  { id: '2', label: 'Платно' },
  { id: '3', label: 'Бесплатно' },
];

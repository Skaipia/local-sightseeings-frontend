import { Sight } from '@/app/types/sight';

const sightMock: Sight = {
  id: '_',
  imageUrl: '/test-sight-card.png',
  sightName: 'Памятник Преданности',
  sightShortDescription: 'Пес Верный ждал хозяина 7 лет на остановке',
  sightLocation: 'Тольятти',
};

export const sightsList = Array(8)
  .fill(sightMock)
  .map((item, index) => ({ ...item, id: index.toString() }));

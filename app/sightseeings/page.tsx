'use client';

import { SightCard } from '@/src/components/sight-card';
import s from './styles.module.css';
import cn from 'classnames';
import { useState } from 'react';
import { CatalogFilter, FilterItem } from '@/src/components/catalog-filter';
import { SearchInput } from '@/src/components/search';
import { SortBar, SortOption } from '@/src/components/sort-bar';

const locations: FilterItem[] = [
  { id: 1, label: 'Все' },
  { id: 2, label: 'Тольятти' },
  { id: 3, label: 'Самара' },
  { id: 4, label: 'Нефтегорск' },
  { id: 5, label: 'Город1' },
  { id: 6, label: 'Город2' },
];

const categories: FilterItem[] = [
  { id: 1, label: 'Все' },
  { id: 2, label: 'Арки и ворота' },
  { id: 3, label: 'Библиотеки' },
  { id: 4, label: 'Водопады' },
  { id: 5, label: 'Набережные' },
  { id: 6, label: 'Скалы' },
];

const userTypes: FilterItem[] = [
  { id: 1, label: 'Всем' },
  { id: 2, label: 'Детям' },
  { id: 3, label: 'Подросткам' },
  { id: 4, label: 'Взрослым' },
  { id: 5, label: 'Пенсионерам' },
];

const workingHours: FilterItem[] = [
  { id: 1, label: 'Все' },
  { id: 2, label: 'Круглосуточно' },
  { id: 3, label: 'Открыто' },
];

const costs: FilterItem[] = [
  { id: 1, label: 'Все' },
  { id: 2, label: 'Платно' },
  { id: 3, label: 'Бесплатно' },
];

const options: SortOption[] = [
  { value: 'popular', label: 'Популярности' },
  { value: 'rating', label: 'Рейтингу' },
];

export default function Home() {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('popular');

  const [location, setLocation] = useState<(number)[]>([]);
  const [category, setCategory] = useState<(number)[]>([]);
  const [userType, setUserType] = useState<(number)[]>([]);
  const [selectedWorkingHours, setSelectedWorkingHours] = useState<(number)[]>([]);
  const [selectedCosts, setSelectedCosts] = useState<(number)[]>([]);

  return (
    <div className="container mx-auto px-8 pt-8 max-w-[1440px]">
      <h1 className={cn('font-golos', s.title)}>Достопримечательности</h1>
      <div className={s.page}>
        <aside className={s.aside}>
          <CatalogFilter title="Местонахождение" items={locations} selected={location} onChange={setLocation} />
          <CatalogFilter title="Категория" items={categories} selected={category} onChange={setCategory} />
          <CatalogFilter title="Будет интересно" items={userTypes} selected={userType} onChange={setUserType} />
          <CatalogFilter title="Время работы" items={workingHours} selected={selectedWorkingHours} onChange={setSelectedWorkingHours} />
          <CatalogFilter title="Стоимость" items={costs} selected={selectedCosts} onChange={setSelectedCosts} />
          <div className={s.buttons}>
            <button className={s.submit}>Применить</button>
            <button className={s.reset}>Сбросить</button>
          </div>
        </aside>
        <div className={s.main}>
          <SearchInput value={search} onChange={setSearch} />
          <SortBar options={options} value={sort} onChange={setSort} />

          <div className={s.content}>
            <SightCard
              imageUrl="/test-sight-card.png"
              sightName="Памятник Преданности"
              sightShortDescription="Пес Верный ждал хозяина 7 лет на остановке"
              sightLocation="Тольятти"
            />
            <SightCard
              imageUrl="/test-sight-card.png"
              sightName="Памятник Преданности"
              sightShortDescription="Пес Верный ждал хозяина 7 лет на остановке"
              sightLocation="Тольятти"
            />
            <SightCard
              imageUrl="/test-sight-card.png"
              sightName="Памятник Преданности"
              sightShortDescription="Пес Верный ждал хозяина 7 лет на остановке"
              sightLocation="Тольятти"
            />
            <SightCard
              imageUrl="/test-sight-card.png"
              sightName="Памятник Преданности"
              sightShortDescription="Пес Верный ждал хозяина 7 лет на остановке"
              sightLocation="Тольятти"
            />
            <SightCard
              imageUrl="/test-sight-card.png"
              sightName="Памятник Преданности"
              sightShortDescription="Пес Верный ждал хозяина 7 лет на остановке"
              sightLocation="Тольятти"
            />
            <SightCard
              imageUrl="/test-sight-card.png"
              sightName="Памятник Преданности"
              sightShortDescription="Пес Верный ждал хозяина 7 лет на остановке"
              sightLocation="Тольятти"
            />
            <SightCard
              imageUrl="/test-sight-card.png"
              sightName="Памятник Преданности"
              sightShortDescription="Пес Верный ждал хозяина 7 лет на остановке"
              sightLocation="Тольятти"
            />
            <SightCard
              imageUrl="/test-sight-card.png"
              sightName="Памятник Преданности"
              sightShortDescription="Пес Верный ждал хозяина 7 лет на остановке"
              sightLocation="Тольятти"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

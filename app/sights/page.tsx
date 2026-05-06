'use client';

import { SightCard } from '@/src/components/sight-card';
import s from './styles.module.css';
import cn from 'classnames';
import { useState } from 'react';
import { CatalogFilter, FilterItem } from '@/src/components/catalog-filter';
import { SearchInput } from '@/src/components/search';
import { SortBar, SortOption } from '@/src/components/sort-bar';

const items: FilterItem[] = [
  { id: 1, label: 'Apple' },
  { id: 2, label: 'Samsung' },
  { id: 3, label: 'Xiaomi' },
  { id: 4, label: 'Huawei' },
  { id: 5, label: 'Honor' },
  { id: 6, label: 'Realme' },
];

const options: SortOption[] = [
  { value: 'popular', label: 'Популярности' },
  { value: 'rating', label: 'Рейтингу' },
];

export default function Home() {
  const [selected, setSelected] = useState<(string | number)[]>([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('popular');

  return (
    <div className={cn('page-container')}>
      <h1 className={cn('font-golos', s.title)}>Достопримечательности</h1>
      <div className={s.page}>
        <aside className={s.aside}>
          <CatalogFilter title="Бренд" items={items} selected={selected} onChange={setSelected} />
          <CatalogFilter title="Бренд" items={items} selected={selected} onChange={setSelected} />
          <CatalogFilter title="Бренд" items={items} selected={selected} onChange={setSelected} />
          <CatalogFilter title="Бренд" items={items} selected={selected} onChange={setSelected} />
          <CatalogFilter title="Бренд" items={items} selected={selected} onChange={setSelected} />
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

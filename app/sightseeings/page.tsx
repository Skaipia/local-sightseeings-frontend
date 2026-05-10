'use client';

import { SightCard } from '@/components/sight-card';
import s from './styles.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { SearchInput } from '@/components/search';
import { SortBar, SortOption } from '@/components/sort-bar';
import { createPortal } from 'react-dom';
import { CatalogFilterMenu, useFilterForm } from '@/components/catalog-filter-menu';
import { sightsList } from '@/app/sightseeings/_data';

const options: SortOption[] = [
  { value: 'popular', label: 'Популярности' },
  { value: 'rating', label: 'Рейтингу' },
];

export default function Home() {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('popular');
  const [isMobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  const filterFormConfig = useFilterForm();

  const openMobileFilter = () => {
    setMobileFilterOpen(true);
  };
  const closeMobileFilter = () => {
    setMobileFilterOpen(false);
  };

  const [sights, setSights] = useState(sightsList);

  const handleSubmitFilter = (filter: ReturnType<typeof useFilterForm>['filter']) => {
    // TODO: запрос на бэк с фильтром; setSights(отфильтрованные данные)
    closeMobileFilter();
  };

  return (
    <>
      <div className="container mx-auto px-8 pt-8 max-w-[1440px]">
        <h1 className={cn('font-golos', s.title)}>Достопримечательности</h1>

        <div className={s.page}>
          <aside className={s.aside}>
            <CatalogFilterMenu formConfig={filterFormConfig} onSubmit={handleSubmitFilter} />
          </aside>
          <div className={s.main}>
            <SearchInput
              value={search}
              onChange={(search) => {
                setSearch(search);
                setSights(search.length > 4 ? [] : sightsList); // TODO: remove
              }}
            />
            <SortBar options={options} value={sort} onChange={setSort} openMobileFilter={openMobileFilter} />

            {sights.length === 0 ? (
              <section className="flex flex-col items-center text-center w-full pt-16 gap-4">
                <p className="text-2xl font-semibold">К сожалению, ничего не нашли по вашему запросу :(</p>
                <p>Попробуйте переформулировать или воспользуйтесь фильтрами.</p>
              </section>
            ) : (
              <div className={s.content}>
                {sights.map((sight) => (
                  <SightCard
                    key={sight.id}
                    imageUrl={sight.imageUrl}
                    sightName={sight.sightName}
                    sightShortDescription={sight.sightShortDescription}
                    sightLocation={sight.sightLocation}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {isMobileFilterOpen &&
        createPortal(
          <div className={cn(s.mobileMenu, 'px-8 pt-8')}>
            <CatalogFilterMenu formConfig={filterFormConfig} onSubmit={handleSubmitFilter} />
          </div>,
          document.body
        )}
    </>
  );
}

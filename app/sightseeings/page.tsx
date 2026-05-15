/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { SightCard } from '@/components/sight-card';
import s from './styles.module.css';
import cn from 'classnames';
import { useMemo, useState } from 'react';
import { SearchInput } from '@/components/search';
import { SortBar, SortOption } from '@/components/sort-bar';
import { createPortal } from 'react-dom';
import { CatalogFilterMenu, defaultFilter, Filter, useFilterForm } from '@/components/catalog-filter-menu';
import { mockSightsList } from '@/app/sightseeings/_data';
import { useDebounce } from '@/shared/hooks/useDebounce';

const options: SortOption[] = [
  { value: 'popular', label: 'Популярности' },
  { value: 'rating', label: 'Рейтингу' },
];

export default function Home() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 300);
  const [sort, setSort] = useState('popular');
  const [appliedFilter, setAppliedFilter] = useState<Filter>(defaultFilter);

  const [isMobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);
  const openMobileFilter = () => {
    setMobileFilterOpen(true);
  };
  const closeMobileFilter = () => {
    setMobileFilterOpen(false);
  };

  const filterFormConfig = useFilterForm();

  const sights = useMemo(
    () =>
      // TODO: запрос на бэк с фильтром; setSights(отфильтрованные данные)
      mockSightsList.filter((one) => {
        const searchStr = debouncedSearch.toLowerCase().trim();
        const isFitBySearch = searchStr
          ? one.title.toLowerCase().includes(searchStr) ||
            one.description.toLowerCase().includes(searchStr) ||
            one.location.toLowerCase().includes(searchStr)
          : true;

        console.log(isFitBySearch, one);
        if (!isFitBySearch) {
          return false;
        }

        const { location, category, price, interestBy, openingHours } = appliedFilter;
        const isFilteredByLocation = location.length ? !appliedFilter.location.includes(one.location) : false;
        if (isFilteredByLocation) {
          return false;
        }
        const isFilteredByCategory =
          category.length && one.category ? !appliedFilter.category.includes(one.category) : false;
        if (isFilteredByCategory) {
          return false;
        }
        const isFilteredByPrice = price.length && one.price ? !appliedFilter.price.includes(one.price) : false;
        if (isFilteredByPrice) {
          return false;
        }
        const isFilteredByInterest =
          interestBy.length && one.interestBy ? !appliedFilter.interestBy.includes(one.interestBy) : false;
        if (isFilteredByInterest) {
          return false;
        }
        const isFilteredByOpeningHours =
          openingHours.length && one.openingHours ? !appliedFilter.openingHours.includes(one.openingHours) : false;
        if (isFilteredByOpeningHours) {
          return false;
        }
        return true;
      }),
    [appliedFilter, debouncedSearch]
  );

  const handleSubmitFilter = (newFilters: Filter) => {
    console.log(newFilters);
    setAppliedFilter(newFilters);
    closeMobileFilter();
  };

  return (
    <>
      <div className="container mx-auto px-8 pt-8 max-w-[1440px]">
        <h1 className={cn('font-golos', s.title)}>Достопримечательности</h1>

        <div className={s.page}>
          <aside className={s.aside}>
            <CatalogFilterMenu
              formConfig={filterFormConfig}
              onSubmit={handleSubmitFilter}
              onReset={() => setAppliedFilter(defaultFilter)}
            />
          </aside>
          <div className={s.main}>
            <SearchInput value={search} onChange={setSearch} />
            <SortBar options={options} value={sort} onChange={setSort} openMobileFilter={openMobileFilter} />

            {sights.length === 0 ? (
              <section className="flex flex-col items-center text-center w-full pt-16 gap-4">
                <p className="text-2xl font-semibold">К сожалению, ничего не нашли по вашему запросу :(</p>
                <p>Попробуйте переформулировать или воспользуйтесь фильтрами.</p>
              </section>
            ) : (
              <div className={s.content}>
                {sights.map((sight, index) => (
                  <SightCard
                    key={index}
                    imageUrl={sight.imageUrl}
                    sightName={sight.title}
                    sightShortDescription={sight.description}
                    sightLocation={sight.location}
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
            <CatalogFilterMenu
              formConfig={filterFormConfig}
              onSubmit={handleSubmitFilter}
              onReset={() => setAppliedFilter(defaultFilter)}
            />
          </div>,
          document.body
        )}
    </>
  );
}

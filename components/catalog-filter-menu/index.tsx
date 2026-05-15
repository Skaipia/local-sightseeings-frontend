import s from './styles.module.css';
import { CatalogFilter } from '@/components/catalog-filter';
import { FC, useCallback, useState } from 'react';
import cn from 'classnames';
import { locationOptions, categoryOptions, interestByOptions, openingHoursOptions, priceOptions } from './_data';
import { Button } from '@/shared/Button';

export type Filter = Record<ESightsFilter, string[]>;

export const defaultFilter: Filter = {
  location: [],
  interestBy: [],
  openingHours: [],
  category: [],
  price: [],
};

export const useFilterForm = (initialFilter: Filter = defaultFilter) => {
  const [filter, setFilter] = useState<Filter>(initialFilter);

  const handleChange = useCallback((field: `${ESightsFilter}`, value: string[]) => {
    setFilter((prev) => ({ ...prev, [field]: value }));
  }, []);

  const resetFilter = useCallback(() => {
    setFilter(defaultFilter);
  }, []);

  return { filter, handleChange, resetFilter };
};

export interface CatalogFilterMenuProps {
  formConfig: ReturnType<typeof useFilterForm>;
  onSubmit: (filter: Filter) => void;
  className?: string;
  onReset?: () => void;
  children?: React.ReactNode;
}

export const CatalogFilterMenu: FC<CatalogFilterMenuProps> = ({
  className,
  children,
  onSubmit,
  onReset,
  formConfig,
}) => {
  const { filter, handleChange, resetFilter } = formConfig;

  return (
    <form
      className={cn(className)}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(filter);
      }}
    >
      <p className={s.title}>Фильтры</p>

      <CatalogFilter
        title="Местонахождение"
        items={locationOptions}
        selected={filter.location}
        onChange={(value) => handleChange('location', value)}
      />
      <CatalogFilter
        title="Категория"
        items={categoryOptions}
        selected={filter.category}
        onChange={(value) => handleChange('category', value)}
      />
      <CatalogFilter
        title="Будет интересно"
        items={interestByOptions}
        selected={filter.interestBy}
        onChange={(value) => handleChange('interestBy', value)}
      />
      <CatalogFilter
        title="Время работы"
        items={openingHoursOptions}
        selected={filter.openingHours}
        onChange={(value) => handleChange('openingHours', value)}
      />
      <CatalogFilter
        title="Стоимость"
        items={priceOptions}
        selected={filter.price}
        onChange={(value) => handleChange('price', value)}
      />

      {children}

      <div className={s.buttons}>
        <Button className={s.submit} type="submit">
          Применить
        </Button>
        <Button
          variant="outline"
          className={s.reset}
          onClick={(e) => {
            e.preventDefault();
            resetFilter();
            onReset?.();
          }}
        >
          Сбросить
        </Button>
      </div>
    </form>
  );
};

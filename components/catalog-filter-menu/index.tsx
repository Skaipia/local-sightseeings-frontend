import s from './styles.module.css';
import { CatalogFilter, FilterItem } from '@/components/catalog-filter';
import { FC, useCallback, useState } from 'react';
import cn from 'classnames';
import { locations, categories, userTypes, workingHours as workingHoursOptions, costs } from './_data';
import { Button } from '@/shared/Button';

export interface Filter {
  location: number[];
  category: number[];
  userType: number[];
  workingHours: number[];
  selectedCosts: number[];
}
const defaultFilter: Filter = {
  location: [],
  category: [],
  userType: [],
  workingHours: [],
  selectedCosts: [],
};

export const useFilterForm = (initialFilter: Filter = defaultFilter) => {
  const [filter, setFilter] = useState<Filter>(initialFilter);

  const handleChange = useCallback((field: keyof Filter, value: number[]) => {
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
        items={locations}
        selected={filter.location}
        onChange={(value) => handleChange('location', value)}
      />
      <CatalogFilter
        title="Категория"
        items={categories}
        selected={filter.category}
        onChange={(value) => handleChange('category', value)}
      />
      <CatalogFilter
        title="Будет интересно"
        items={userTypes}
        selected={filter.userType}
        onChange={(value) => handleChange('userType', value)}
      />
      <CatalogFilter
        title="Время работы"
        items={workingHoursOptions}
        selected={filter.workingHours}
        onChange={(value) => handleChange('workingHours', value)}
      />
      <CatalogFilter
        title="Стоимость"
        items={costs}
        selected={filter.selectedCosts}
        onChange={(value) => handleChange('selectedCosts', value)}
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

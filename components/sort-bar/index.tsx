'use client';

import { FC, useState } from 'react';
import cn from 'classnames';
import s from './styles.module.css';
import { ClickAwayListener } from '@/shared/ClickAwayListener';

export type SortOption = {
  value: string;
  label: string;
};

type Props = {
  options: SortOption[];
  value: string;
  onChange: (value: string) => void;
  openMobileFilter: () => void;
};

export const SortBar: FC<Props> = ({ options, value, onChange, openMobileFilter }) => {
  const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
  const selectedLabel = options.find((o) => o.value === value)?.label;
  const label = selectedLabel ? `По ${selectedLabel.toLowerCase()}` : 'Сортировать по';

  return (
    <div className={s.wrapper}>
      <ClickAwayListener
        onClickAway={() => setMobileFilterOpen(false)}
        className={cn(s['sort-mobile'], { [s.open]: isMobileFilterOpen })}
        data-select
      >
        <button
          className={s['select-trigger']}
          type="button"
          aria-haspopup="listbox"
          aria-expanded="false"
          aria-labelledby="selected-label selected-value"
          onClick={() => setMobileFilterOpen((p) => !p)}
        >
          <span id="selected-label">{label}</span>

          <svg className={s['select-arrow']} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <ul className={s['select-dropdown']} role="listbox" tabIndex={-1} aria-label="Сортировка">
          {options.map((option) => (
            <li
              className={`${s['select-option']} ${s.active}`}
              role="option"
              aria-selected="true"
              tabIndex={0}
              data-value="popular"
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setMobileFilterOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </ClickAwayListener>

      <div className={s.sort}>
        <span className={s.label}>Сортировать по:</span>

        <div className={s.options}>
          {options.map((option) => {
            const isActive = option.value === value;

            return (
              <button
                key={option.value}
                className={`${s.option} ${isActive ? s.active : ''}`}
                onClick={() => onChange(option.value)}
                type="button"
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>
      <button className={s.filterBtn} type="button" onClick={openMobileFilter}>
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21 1H1L9 10.46V17L13 19V10.46L21 1Z"
            stroke="#25282B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

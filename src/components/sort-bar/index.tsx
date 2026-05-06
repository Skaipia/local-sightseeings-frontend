'use client';

import React from 'react';
import s from './styles.module.css';

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

export const SortBar: React.FC<Props> = ({ options, value, onChange, openMobileFilter }) => {
  return (
    <div className={s.wrapper}>
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
      <button className={s.filterBtn} onClick={openMobileFilter}>
        <svg
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 1H1L9 10.46V17L13 19V10.46L21 1Z"
            stroke="#25282B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

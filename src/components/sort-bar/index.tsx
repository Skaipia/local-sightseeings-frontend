"use client";

import React from "react";
import s from "./styles.module.css";

export type SortOption = {
  value: string;
  label: string;
};

type Props = {
  options: SortOption[];
  value: string;
  onChange: (value: string) => void;
};

export const SortBar: React.FC<Props> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <div className={s.sort}>
      <span className={s.label}>Сортировать по:</span>

      <div className={s.options}>
        {options.map((option) => {
          const isActive = option.value === value;

          return (
            <button
              key={option.value}
              className={`${s.option} ${
                isActive ? s.active : ""
              }`}
              onClick={() => onChange(option.value)}
              type="button"
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
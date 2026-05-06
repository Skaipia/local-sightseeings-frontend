"use client";

import React, { useState, useMemo } from "react";
import s from "./styles.module.css";

export type FilterItem = {
  id: string | number;
  label: string;
};

type Props = {
  title: string;
  items: FilterItem[];
  selected: (string | number)[];
  onChange: (selected: (string | number)[]) => void;
  defaultVisibleCount?: number;
};

export const CatalogFilter: React.FC<Props> = ({
  title,
  items,
  selected,
  onChange,
  defaultVisibleCount = 4,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const visibleItems = useMemo(() => {
    return isOpen ? items : items.slice(0, defaultVisibleCount);
  }, [isOpen, items, defaultVisibleCount]);

  const toggleItem = (id: string | number) => {
    if (selected.includes(id)) {
      onChange(selected.filter((item) => item !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <div className={s.catalogFilter}>
      <div className={s.header}>
        <span className={s.title}>{title}</span>
      </div>

      <div className={s.list}>
        {visibleItems.map((item) => {
          const isChecked = selected.includes(item.id);

          return (
            <label key={item.id} className={s.item}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => toggleItem(item.id)}
                className={s.input}
              />

              <span
                className={`${s.checkbox} ${
                  isChecked ? s.checked : ""
                }`}
              />

              <span>{item.label}</span>
            </label>
          );
        })}
      </div>

      {items.length > defaultVisibleCount && (
        <button
          className={s.toggle}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? "Скрыть" : "Показать все"}
        </button>
      )}
    </div>
  );
};
"use client";

import React, { useState } from "react";
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

      <div className={`${s.listWrapper} ${isOpen ? s.expanded : ""}`}>
        <div className={s.list}>
          {items.map((item) => {
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
                >
                  {isChecked && (
                    <svg
                      width="17"
                      height="13"
                      viewBox="0 0 17 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={s.checkmark}
                    >
                      <path
                        d="M15.3125 1.3125L5.6875 10.9375L1.3125 6.5625"
                        stroke="#FAFAFA"
                        strokeWidth="2.625"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>

                <span>{item.label}</span>
              </label>
            );
          })}
        </div>
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

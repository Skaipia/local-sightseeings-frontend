"use client";

import React, { useState } from "react";
import s from "./styles.module.css";

export type FilterItem = {
  key: string;
  label: string;
};

type Props = {
  title: string;
  items: FilterItem[];
  selected: (string)[];
  onChange: (selected: (string)[]) => void;
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

  const toggleItem = (key:string) => {
    if (selected.includes(key)) {
      onChange(selected.filter((item) => item !== key));
    } else {
      onChange([...selected, key]);
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
            const isChecked = selected.includes(item.key);

            return (
              <label key={item.key} className={s.item}>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleItem(item.key)}
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

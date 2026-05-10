"use client";

import React from "react";
import s from "./styles.module.css";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const SearchInput: React.FC<Props> = ({
  value,
  onChange,
  placeholder = "Найти...",
}) => {
  return (
    <label className={s.search}>
      {/* Иконка */}
      <span className={s.icon}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            cx="11"
            cy="11"
            r="7"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="20"
            y1="20"
            x2="16.5"
            y2="16.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>

      {/* Input */}
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
};
import { FC } from "react";
import cn from 'classnames'
import s from './styles.module.css';

export interface CardsGridProps {
  children: React.ReactNode;
  className?: string;
}

export const CardsGrid: FC<CardsGridProps> = ({ children, className }) => {
  return (
    <div className={cn(s.grid, className)}>{children}</div>
  )
}
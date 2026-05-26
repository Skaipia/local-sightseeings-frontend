import { FC } from 'react';
import cn from 'classnames';
import s from './styles.module.css';

export interface LoaderProps {
  fullHeight?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ children, className, fullHeight }) => {
  return (
    <div className={cn(s.wrapper, { [s['wrapper_full-height']]: fullHeight }, className)}>
      <span className={cn(s.loader)}>{children}</span>
    </div>
  );
};

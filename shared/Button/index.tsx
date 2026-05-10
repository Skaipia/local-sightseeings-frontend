import { ActionSize, ActionVariant, getActionClass } from '../_actionClass';
import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.css';

export type ButtonVariant = ActionVariant;
export type ButtonSize = ActionSize;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = ({ children, variant = 'primary', size = 'md', type, className, ...props }: ButtonProps) => {
  return (
    <button
      // className={classNames(styles.button, styles[variant], styles[size], className)}
      className={getActionClass(variant, size, styles.button, className)}
      type={type || 'button'}
      {...props}
    >
      {children}
    </button>
  );
};

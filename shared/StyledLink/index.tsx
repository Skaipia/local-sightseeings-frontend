// link
import { ActionSize, ActionVariant, getActionClass } from '../_actionClass';
import BaseLink from 'next/link';
import styles from './styles.module.css';

export type LinkVariant = ActionVariant;
export type LinkSize = ActionSize;

export type StyledLinkProps = Parameters<typeof BaseLink>[0] & {
  variant?: LinkVariant;
  size?: LinkSize;
};

export const StyledLink = ({ variant = 'link', size, className, ...props }: StyledLinkProps) => {
  return <BaseLink className={getActionClass(variant, size, styles.link, className)} {...props} />;
};

import classNames from 'classnames'
import './styles.css'

export type ActionVariant = 'primary' | 'outline' | 'link' | 'plain'
export type ActionSize = 'sm' | 'md' | 'lg'

export const getActionClass = (
	variant?: ActionVariant,
	size: ActionSize = 'md',
	...other: classNames.ArgumentArray
) => {
	return classNames('action', `action-${size}`, `action-${variant}`, ...other)
}

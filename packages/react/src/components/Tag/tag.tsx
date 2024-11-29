import { TagProps } from '@queo/core/src/types/tag';

export interface ReactTagProps extends TagProps {
	children: React.ReactNode;
	className?: string;
}

export function Tag({ size = 'size', variant, isActive, children, ariaLabel = '' }: ReactTagProps) {
	const classes = [
		'queo-tag',
		`queo-tag--${size}`,
		variant ? `queo-tag--${variant}` : '',
		isActive ? 'queo-tag--active' : '',
	]
		.filter(Boolean)
		.join(' ');

	return (
		<span role="option" aria-label={ariaLabel} className={classes}>
			{children}
		</span>
	);
}

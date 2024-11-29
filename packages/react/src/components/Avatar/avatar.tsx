import { AvatarProps } from '@queo/core/src';
import { useState } from 'react';

export interface ReactAvatarProps extends AvatarProps {
	className?: string;
}

export function Avatar({
	src,
	alt = '',
	size = 'md',
	variant = 'circle',
	status,
	fallback,
	className,
}: ReactAvatarProps) {
	const [hasError, setHasError] = useState(false);

	const classes = ['queo-avatar', `queo-avatar--${size}`, `queo-avatar--${variant}`, className]
		.filter(Boolean)
		.join(' ');

	return (
		<div className={classes}>
			{src && !hasError ? (
				<img src={src} alt={alt} className="queo-avatar__image" onError={() => setHasError(true)} />
			) : (
				<span className="queo-avatar__fallback">{fallback || alt?.charAt(0).toUpperCase()}</span>
			)}
			{status && <span className={`queo-avatar__status queo-avatar__status--${status}`} />}
		</div>
	);
}

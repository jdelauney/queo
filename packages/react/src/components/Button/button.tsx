import { ButtonProps } from '@queo/core/src/index';

export interface ReactButtonProps extends ButtonProps {
	children?: React.ReactNode;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	className?: string;
	iconRight?: React.ReactNode;
}

export function Button({
	size = 'sm',
	variant = 'primary',
	loading = false,
	disabled = false,
	loadingPosition = 'right',
	children,
	icon,
	iconRight,
	loadingIcon,
	onClick,
	ariaLabel,
}: ReactButtonProps) {
	const hasOnlyIcon = !children && (!!icon || !!loadingIcon);

	const classes = ['queo-btn', `queo-btn--${variant}`, `queo-btn--${size}`, hasOnlyIcon ? 'queo-btn--icon-only' : '']
		.filter(Boolean)
		.join(' ');

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (!disabled && !loading && onClick) {
			onClick(event);
		}
	};

	return (
		<button
			className={classes}
			aria-disabled={disabled || loading}
			aria-label={ariaLabel}
			aria-busy={loading}
			disabled={disabled || loading}
			onClick={handleClick}
		>
			{loading && hasOnlyIcon ? (
				<span role="status">{loadingIcon}</span>
			) : (
				<>
					{/* Loading icon left */}
					{loading && loadingPosition === 'left' && (
						<span role="status" aria-hidden="true">
							{loadingIcon}
						</span>
					)}

					{/* Regular icon left */}
					{!loading && icon && <span aria-hidden="true">{icon}</span>}

					{/* Content */}
					{children && (
						<span className={`taylux-btn-content ${loading && !loadingIcon ? 'sr-only' : ''}`}>
							{children}
						</span>
					)}

					{/* Loading icon right */}
					{loading && loadingPosition === 'right' && (
						<span role="status" aria-hidden="true">
							{loadingIcon}
						</span>
					)}

					{/* Regular icon right */}
					{!loading && iconRight && <span aria-hidden="true">{iconRight}</span>}
				</>
			)}
		</button>
	);
}

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

	const classes = [
		'taylux-btn',
		`taylux-btn--${variant}`,
		`taylux-btn--${size}`,
		hasOnlyIcon ? 'taylux-btn--icon-only' : '',
	]
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
				<span className="taylux-btn-icon-center" role="status">
					{loadingIcon}
				</span>
			) : (
				<>
					{/* Loading icon left */}
					{loading && loadingPosition === 'left' && (
						<span className="taylux-btn-icon-left" role="status" aria-hidden="true">
							{loadingIcon}
						</span>
					)}

					{/* Regular icon left */}
					{!loading && icon && (
						<span className="taylux-btn-icon-left" aria-hidden="true">
							{icon}
						</span>
					)}

					{/* Content */}
					{children && (
						<span className={`taylux-btn-content ${loading && !loadingIcon ? 'sr-only' : ''}`}>
							{children}
						</span>
					)}

					{/* Loading icon right */}
					{loading && loadingPosition === 'right' && (
						<span className="taylux-btn-icon-right" role="status" aria-hidden="true">
							{loadingIcon}
						</span>
					)}

					{/* Regular icon right */}
					{!loading && iconRight && (
						<span className="taylux-btn-icon-right" aria-hidden="true">
							{iconRight}
						</span>
					)}
				</>
			)}
		</button>
	);
}

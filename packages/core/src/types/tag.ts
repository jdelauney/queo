export const TAGS_SIZES = ['sm', 'md', 'lg'];
export const TAGS_VARIANTS = ['primary', 'secondary', 'outline', 'ghost', 'danger'] as const;

type TagSize = (typeof TAGS_SIZES)[number];
type TagVariant = (typeof TAGS_VARIANTS)[number];

export interface TagProps {
	isActive?: boolean;
	size?: TagSize;
	variant?: TagVariant;
	ariaLabel?: string;
}

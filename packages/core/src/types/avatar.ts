export const AVATAR_SIZE = ['xs', 'sm', 'md', 'lg', 'xl'];
export const AVATAR_VARIANT = ['circle', 'square'];
export const AVATAR_STATUS = ['online', 'offline', 'busy', 'away'];

type AvatarSize = (typeof AVATAR_SIZE)[number];
type AvatarVariant = (typeof AVATAR_VARIANT)[number];
type AvatarStatus = (typeof AVATAR_STATUS)[number];

export interface AvatarProps {
	src?: string;
	alt?: string;
	size?: AvatarSize;
	variant?: AvatarVariant;
	status?: AvatarStatus;
	fallback?: string;
}

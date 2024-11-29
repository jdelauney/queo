/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { AvatarProps } from '@queo/core/src/types/avatar';
import type { ButtonProps } from '@queo/core/src/types/button';
import type { TagProps } from '@queo/core/src/types/tag';
import { DefineComponent } from 'vue';

declare module 'taylux' {
	export const Button: DefineComponent<ButtonProps, {}, {}>;
	export const Tag: DefineComponent<TagProps, {}, {}>;
	export const Avatar: DefineComponent<AvatarProps, {}, {}>;
}

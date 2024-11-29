/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { ButtonProps } from '@queo/core/src/types/button';
import { TagProps } from '@queo/core/src/types/tag';
import { DefineComponent } from 'vue';

declare module 'taylux' {
	export const Button: DefineComponent<ButtonProps, {}, {}>;
	export const Tag: DefineComponent<TagProps, {}, {}>;
}

/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { ButtonProps } from '@queo/core/src/types/button';
import { DefineComponent } from 'vue';

declare module 'taylux' {
	export const Button: DefineComponent<ButtonProps, {}, {}>;
}

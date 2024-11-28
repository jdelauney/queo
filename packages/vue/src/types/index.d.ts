/* eslint-disable @typescript-eslint/no-empty-object-type */
import ButtonProps from '@tayluxui/core/src/types/button';
import { DefineComponent } from 'vue';

declare module 'taylux' {
	export const Button: DefineComponent<ButtonProps, {}, {}>;
}

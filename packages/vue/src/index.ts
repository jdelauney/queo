import '@taylux/core/src/styles/main.scss';
import { App } from 'vue';
import Button from './components/Button/Button.vue';

export { Button };

export const plugin = {
	install(app: App) {
		app.component('Button', Button);
	},
};

export default plugin;

declare module '@vue/runtime-core' {
	export interface GlobalComponents {
		Button: typeof Button;
	}
}

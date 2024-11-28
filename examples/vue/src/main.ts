import plugin from '@tayluxui/vue';
import 'taylux-core/src/styles/main.scss';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(plugin);
app.mount('#app');

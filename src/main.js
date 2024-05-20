import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';
import ViewRouter from './router';
import VueKonva from 'vue-konva';

const app = createApp(App);
app.use(ArcoVue);
app.use(ViewRouter);
app.use(VueKonva, { prefix: 'Konva'});
app.mount('#app');

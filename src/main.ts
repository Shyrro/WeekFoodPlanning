import { createApp, reactive } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

// import "primevue/resources/themes/bootstrap4-dark-purple/theme.css";
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import Card from 'primevue/card';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Ripple from 'primevue/ripple';
import ProgressSpinner from 'primevue/progressspinner';

import { IonicVue } from '@ionic/vue';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

const app = createApp(App);

app
  .use(store)
  .use(IonicVue)
  .use(router);

app.component('InputText', InputText);
app.component('Button', Button);
app.component('Card', Card);
app.component('Dropdown', Dropdown);
app.component('ProgressSpinner', ProgressSpinner);

app.directive('ripple', Ripple);

app.config.globalProperties.$appState = reactive({
  inputStyle: 'outlined',
  darkTheme: false
});
app.config.globalProperties.$primevue = { ripple: true };

router.isReady().then(() => {
  app.mount('#app');
});

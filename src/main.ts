import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import { IonicVue } from '@ionic/vue';

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

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

// Icons import

import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';

const currentIcons = Object.keys(allIcons).map(i => {
  const key = i.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
  if (typeof allIcons[i] === 'string') {
    return {
      [key]: allIcons[i]
    };
  }
  return {
    ['ios-' + key]: allIcons[i].ios,
    ['md-' + key]: allIcons[i].md
  };
});

const iconsObject = Object.assign({}, ...currentIcons);
addIcons(iconsObject);

import {
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonCardHeader,
  IonInput,
  IonLabel,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonIcon,
  IonSpinner
} from '@ionic/vue';

const app = createApp(App);

app
  .use(store)
  .use(IonicVue)
  .use(router);
// Ionic components
app.component('IonCard', IonCard);
app.component('IonCardTitle', IonCardTitle);
app.component('IonCardContent', IonCardContent);
app.component('IonCardHeader', IonCardHeader);
app.component('IonInput', IonInput);
app.component('IonLabel', IonLabel);
app.component('IonItem', IonItem);
app.component('IonSelect', IonSelect);
app.component('IonSelectOption', IonSelectOption);
app.component('IonButton', IonButton);
app.component('IonIcon', IonIcon);
app.component('IonSpinner', IonSpinner);

router.isReady().then(() => {
  app.mount('#app');
});

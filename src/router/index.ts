import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue';
import IngredientsScreen from '@/views/IngredientsScreen.vue';
import TileScreen from '@/views/TileScreen.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        component: TileScreen
      },
      {
        path: '/IngredientsScreen',
        component: IngredientsScreen
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

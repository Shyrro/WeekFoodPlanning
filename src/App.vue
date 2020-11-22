<template>
  <ion-app>
    <ion-header>
      <h2 class="header-text">My Food Friend</h2>
    </ion-header>
    <ion-content>
      <ion-router-outlet />
    </ion-content>
  </ion-app>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { IonApp, IonHeader, IonRouterOutlet, IonContent } from '@ionic/vue';

export default defineComponent({
  name: 'App',
  components: {
    IonHeader,
    IonContent,
    IonApp,
    IonRouterOutlet
  }
});
</script>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: 'SweetsDelight';
  src: url('../src/assets/font/SweetsDelightDemo.otf') format('opentype');
}

.header-text {
  font-family: 'SweetsDelight';
  padding: 20px;
  text-align: center;
  text-shadow: 0px 0px 2px white, 4px 3px 0px white;
}

html {
  background-color: #ffffff;
}
</style>

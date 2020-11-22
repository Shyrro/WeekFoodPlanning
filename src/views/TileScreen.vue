<template>
  <div class="p-grid">
    <div class="p-col-12 p-md-6 p-lg-4">
      <ion-card class="ion-activatable" @click="goToIngredients">
        <ion-card-header>
          <ion-card-title> Add ingredient </ion-card-title>
        </ion-card-header>
        <ion-card-content> Add your ingredients </ion-card-content>
        <ion-ripple-effect></ion-ripple-effect>
      </ion-card>
    </div>
    <div class="p-col-12 p-md-6 p-lg-4">
      <ion-card class="ion-activatable">
        <ion-card-header>
          <ion-card-title> Add recipee </ion-card-title>
        </ion-card-header>
        <ion-card-content> Add your recipees </ion-card-content>
        <ion-ripple-effect></ion-ripple-effect>
      </ion-card>
    </div>
    <div class="p-col-12 p-md-6 p-lg-4">
      <ion-card class="ion-activatable">
        <ion-card-header>
          <ion-card-title> Planning </ion-card-title>
        </ion-card-header>
        <ion-card-content> Plan your week </ion-card-content>
        <ion-ripple-effect></ion-ripple-effect>
      </ion-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import router from '@/router';
import { IonRippleEffect } from '@ionic/vue';

export default defineComponent({
  name: 'TileScreen',
  components: {
    IonRippleEffect
  },
  methods: {
    goToIngredients() {
      router.push({ path: '/IngredientsScreen' });
    }
  }
});
</script>
<style lang="scss">
.tile-container {
  @apply grid grid-flow-col grid-cols-3;
}

.p-ripple.gray .p-ink {
  // background: rgba(256, 39, 176, 0.3);
  background: rgba(211, 211, 211, 0.5);
}
</style>

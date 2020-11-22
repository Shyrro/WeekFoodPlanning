<template>
  <ion-page class="container mx-auto grid grid-flow-row gap-5">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonRouterOutlet, IonPage, IonContent } from '@ionic/vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonPage,
    IonRouterOutlet,
    IonContent
  }
});
</script>
<style lang="scss">
.container {
  padding: 15px;
}

.separator {
  height: 2px;
  @apply bg-gray-300 flex-grow;
}

.slide-leave-active,
.slide-enter-active {
  transition: 0.5s ease;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}

.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.2s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

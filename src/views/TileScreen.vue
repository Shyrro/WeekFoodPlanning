<template>
  <ion-card class="ion-activatable" @click="openAddFormModal">
    <ion-card-header>
      <ion-card-title> Add ingredient </ion-card-title>
    </ion-card-header>
    <ion-card-content> Add your ingredients </ion-card-content>
    <ion-ripple-effect></ion-ripple-effect>
  </ion-card>
  <ion-card class="ion-activatable">
    <ion-card-header>
      <ion-card-title> Add recipee </ion-card-title>
    </ion-card-header>
    <ion-card-content> Add your recipees </ion-card-content>
    <ion-ripple-effect></ion-ripple-effect>
  </ion-card>
  <ion-card class="ion-activatable">
    <ion-card-header>
      <ion-card-title> Planning </ion-card-title>
    </ion-card-header>
    <ion-card-content> Plan your week </ion-card-content>
    <ion-ripple-effect></ion-ripple-effect>
  </ion-card>
  <ion-modal :is-open="isOpenRef" @onDidDismiss="setOpen(false)">
    <AddIngredientForm @form-consumed="setOpen(false)"></AddIngredientForm>
  </ion-modal>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import router from '@/router';
import { IonRippleEffect } from '@ionic/vue';
import AddIngredientForm from '@/components/AddIngredientForm.vue';

export default defineComponent({
  name: 'TileScreen',
  components: {
    IonRippleEffect,
    AddIngredientForm
  },
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => (isOpenRef.value = state);

    return { isOpenRef, setOpen };
  },
  methods: {
    goToIngredients() {
      router.push({ path: '/IngredientsScreen' });
    },
    openAddFormModal() {
      this.isOpenRef = true;
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

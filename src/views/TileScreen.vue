<template>
  <div class="p-grid">
    <div class="p-col-12 p-md-6 p-lg-4">
      <Card
        class="p-fluid p-shadow-4 p-ripple gray"
        v-ripple
        @click="goToIngredients"
      >
        <template #title>
          Add ingredient
        </template>
        <template #content>
          <p>Add your ingredients</p>
        </template>
      </Card>
    </div>
    <div class="p-col-12 p-md-6 p-lg-4">
      <Card class="p-fluid p-shadow-4 p-ripple gray" v-ripple>
        <template #title>
          Add recipee
        </template>
        <template #content>
          <p>Add your recipees</p>
        </template>
      </Card>
    </div>
    <div class="p-col-12 p-md-6 p-lg-4">
      <Card class="p-fluid p-shadow-4 p-ripple gray" v-ripple>
        <template #title>
          Planning
        </template>
        <template #content>
          <p>Plan your week</p>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import router from '@/router';

export default defineComponent({
  name: 'TileScreen',
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

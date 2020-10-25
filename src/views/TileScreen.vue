<template>
  <div v-if="componentMounted" class="p-grid">
    <div class="p-col-12 p-md-6 p-lg-4">
      <Card class="p-fluid" @click="goToIngredients">
        <template #title>
          Add ingredient
        </template>
        <template #content>
          <p>Add your ingredients</p>
        </template>
      </Card>
    </div>
    <div class="p-col-12 p-md-6 p-lg-4">
      <Card class="p-fluid">
        <template #title>
          Add recipee
        </template>
        <template #content>
          <p>Add your recipees</p>
        </template>
      </Card>
    </div>
    <div class="p-col-12 p-md-6 p-lg-4">
      <Card class="p-fluid">
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
import { defineComponent } from "vue";
import { useHideComponentOnTransition } from "@/composition-functions/transitions/handleTransitions";
import router from "@/router";

export default defineComponent({
  name: "TileScreen",
  setup() {
    const componentMounted = useHideComponentOnTransition();

    return {
      componentMounted
    };
  },
  methods: {
    goToIngredients() {
      router.push({ path: "/IngredientsScreen" });
    }
  }
});
</script>
<style lang="scss">
.tile-container {
  @apply grid grid-flow-col grid-cols-3;
}
</style>

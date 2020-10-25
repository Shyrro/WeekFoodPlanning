<template>
  <div v-if="componentMounted" class="tile-container">
    <tile class="flex-grow" label="Add ingredient" @click="goToIngredients" />
    <tile class="flex-grow" label="Add recipee" />
    <tile class="flex-grow" label="Plan your week" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Tile from "@/components/Tile.vue";
import { useHideComponentOnTransition } from "@/composition-functions/transitions/handleTransitions";
import router from "@/router";

export default defineComponent({
  name: "TileScreen",
  components: {
    Tile
  },
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

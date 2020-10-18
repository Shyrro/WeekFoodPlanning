<template>
  <div class="container mx-auto grid grid-flow-row gap-5">
    <h2 class="text-4xl text-center">Food Planner</h2>
    <div class="tile-container grid grid-flow-col grid-cols-3">
      <Tile class="flex-grow" label="Add ingredient" />
      <Tile class="flex-grow" label="Add recipee" />
      <Tile class="flex-grow" label="Plan your week" />
    </div>
    <span class="separator"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Tile from "@/components/Tile.vue";

export default defineComponent({
  name: "Home",
  components: {
    Tile
  }
});
</script>
<style lang="scss">
.separator {
  height: 2px;
  @apply bg-gray-300 flex-grow;
}
</style>

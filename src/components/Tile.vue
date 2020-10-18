<template>
  <div class="tile">
    <span class="tile-icon" :class="icon"></span>
    <div class="text-tile">
      <p class="text-tile-content text-center">{{ label }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tile",
  props: {
    icon: {
      type: String,
      value: ""
    },
    label: {
      type: String,
      value: ""
    }
  }
});
</script>

<style lang="scss">
.tile {
  margin: 5px;
  @apply max-w-sm rounded overflow-hidden shadow-lg;

  .text-tile {
    @apply px-6 py-4;
    .text-tile-content {
      @apply text-gray-700 text-base;
    }
  }
}
</style>

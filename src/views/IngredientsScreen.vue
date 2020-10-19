<template>
  <div v-if="componentMounted" class="grid grid-flex-row gap-5">
    <div class="flex mb-4 w-full gap-4">
      <div class="grid grid-flow-row auto-rows-max content-input-panel">
        <input
          type="text"
          class="input border"
          placeholder="Ingredient name"
        />
        <select name="select-unit" class="input border" placeholder="Select unit">
          <option value="solo">Unitaire</option>
          <option value="g">Gramme</option>
        </select>
      </div>
      <div class="content-input-panel">
        prout
      </div>
    </div>
    <button
      
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="goBack"
    >
      Go back
    </button>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { defineComponent } from "vue";
import { useHideComponentOnTransition } from "@/composition-functions/transitions/handleTransitions";

export default defineComponent({
  name: "IngredientsScreen",
  setup() {
    const componentMounted = useHideComponentOnTransition();

    return {
      componentMounted,
    };
  },
  methods: {
    goBack() {
      router.go(-1);
    },
  },
});
</script>
<style lang="scss">
.content-input-panel {
  @apply flex flex-grow p-6 bg-white rounded-lg shadow-xl;
}

.input {
  @apply rounded  text-xl flex flex-grow ;
  display: block;
  &::placeholder {
    @apply text-gray-400; 
  }

  &:focus {
    @apply outline-none bg-white shadow-outline border-gray-300;
  }
}
</style>

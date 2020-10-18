<template>
  <button
    v-if="componentMounted"
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    @click="goBack"
  >
    Go back
  </button>
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
      componentMounted
    };
  },
  methods: {
    goBack() {
      router.go(-1);
    }
  }
});
</script>

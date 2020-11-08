<template>
  <Card class="p-shadow-2">
    <template #title>
      Existant ingredients
    </template>
    <template #content>
      <ProgressSpinner v-if="!ingredientsLoaded" />
      <ColoredTags :list="ingredients" @select-item="selectIngredient" />
    </template>
  </Card>
</template>

<script lang="ts">
import { IngredientModel } from '@/Models/Ingredient';
import { defineAsyncComponent, defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    ingredients: {
      type: Array as PropType<IngredientModel[]>,
      default: [] as IngredientModel[]
    }
  },
  components: {
    ColoredTags: defineAsyncComponent(() =>
      import('@/components/ColoredTags.vue')
    )
  },
  emits: ['select-ingredient'],
  computed: {
    ingredientsLoaded(): boolean {
      return this.ingredients.length > 0;
    }
  },
  methods: {
    selectIngredient(ingredient: IngredientModel): void {
      this.$emit('select-ingredient', ingredient);
    }
  }
});
</script>

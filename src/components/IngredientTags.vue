<template>
  <Card class="p-shadow-4">
    <template #title>
      Existant ingredients
    </template>
    <template #content>
      <ProgressSpinner v-if="!ingredientsLoaded" />
      <span
        v-for="ingredient in ingredients"
        :key="ingredient._id"
        class="p-tag p-tag-rounded tag-size"
        :style="`background: #${ingredient.color}`"
        @click="selectIngredient(ingredient)"
      >
        {{ ingredient.name }}
      </span>
    </template>
  </Card>
</template>

<script lang="ts">
import { IngredientModel } from '@/Models/Ingredient';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    ingredients: {
      type: Array as PropType<IngredientModel[]>,
      default: [] as IngredientModel[]
    }
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

<style scoped>
.tag-size {
  font-size: 0.9em;
  margin: 2px;
}
</style>

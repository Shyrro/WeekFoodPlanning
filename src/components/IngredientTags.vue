<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title> Existing ingredients </ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-spinner name="crescent" v-if="!ingredientsLoaded" />
      <ColoredTags :list="ingredients" @select-item="selectIngredient" />
    </ion-card-content>
  </ion-card>
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
    ColoredTags: defineAsyncComponent(
      () => import('@/components/ColoredTags.vue')
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

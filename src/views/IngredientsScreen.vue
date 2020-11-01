<template>
  <fillable-screen>
    <template #left-panel>
      <add-ingredient-form
        :ingredients="ingredients"
        :selected-ingredient="selectedIngredient"
        @upserted-ingredient="updateIngredients"
      ></add-ingredient-form>
    </template>
    <template #right-panel>
      <ingredient-tags
        :ingredients="ingredients"
        @select-ingredient="updateSelectedIngredient"
      ></ingredient-tags>
    </template>
  </fillable-screen>
</template>

<script lang="ts">
import router from '@/router';
import { Ingredient } from '@/Models/Ingredient';
import { defineAsyncComponent, defineComponent } from 'vue';
import { useFetch } from '@/composition-functions/requests/handleRequests';

export default defineComponent({
  name: 'IngredientsScreen',
  setup() {
    const ingredients = useFetch<Ingredient>('ingredients');

    return {
      ingredients
    };
  },
  components: {
    FillableScreen: defineAsyncComponent(() =>
      import('@/components/FillableScreen.vue')
    ),
    AddIngredientForm: defineAsyncComponent(() =>
      import('@/components/AddIngredientForm.vue')
    ),
    IngredientTags: defineAsyncComponent(() =>
      import('@/components/IngredientTags.vue')
    )
  },
  data() {
    return {
      theme: 'dark',
      selectedIngredient: {} as Ingredient
    };
  },
  methods: {
    goBack() {
      router.go(-1);
    },
    changeTheme() {
      import(
        `primevue/resources/themes/bootstrap4-${this.theme}-purple/theme.css`
      );
    },
    updateIngredients(upsertedIngredient: Ingredient): void {
      const indexToUpdate = this.ingredients.findIndex(
        ing => ing._id === upsertedIngredient._id
      );
      if (indexToUpdate < 0) {
        this.ingredients.push(upsertedIngredient);
        return;
      }

      this.ingredients[indexToUpdate] = upsertedIngredient;
    },
    updateSelectedIngredient(ingredient: Ingredient): void {
      this.selectedIngredient = ingredient;
    }
  }
});
</script>

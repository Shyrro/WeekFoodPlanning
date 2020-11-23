<template>
  <FillableScreen>
    <template #left-panel>
      <AddIngredientForm
        :ingredients="ingredients"
        :selected-ingredient="localStore.state.selectedIngredient"
        @upserted-ingredient="updateIngredients"
      ></AddIngredientForm>
    </template>
    <template #right-panel>
      <IngredientTags
        :ingredients="ingredients"
        @select-ingredient="updateSelectedIngredient"
      ></IngredientTags>
    </template>
  </FillableScreen>
</template>

<script lang="ts">
import router from '@/router';
import { Ingredient, IngredientModel } from '@/Models/Ingredient';
import {
  createLocalStore,
  ingredientStateIdentifier
} from '@/components/local-states/IngredientState';
import { defineAsyncComponent, defineComponent, provide } from 'vue';
import { useFetch } from '@/composition-functions/requests/handleRequests';

export default defineComponent({
  name: 'IngredientsScreen',
  setup() {
    const ingredients = useFetch<IngredientModel>('ingredients');
    const localStore = createLocalStore();
    provide(ingredientStateIdentifier, localStore);

    return {
      ingredients,
      localStore
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
  methods: {
    goBack() {
      router.go(-1);
    },
    updateIngredients(upsertedIngredient: IngredientModel): void {
      const indexToUpdate = this.ingredients.findIndex(
        ing => ing._id === upsertedIngredient._id
      );
      if (indexToUpdate < 0) {
        this.ingredients.push(upsertedIngredient);
        return;
      }

      this.ingredients[indexToUpdate] = upsertedIngredient;
    },
    updateSelectedIngredient(ingredient: IngredientModel): void {
      const newIngredient = new Ingredient(ingredient);
      this.localStore.mutateIngredient(newIngredient);
    }
  }
});
</script>

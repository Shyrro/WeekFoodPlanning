<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>
        Add ingredient
        <ion-button @click="consumeForm">
          <ion-icon name="close-outline"></ion-icon>
        </ion-button>
      </ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding add-form-content">
    <ion-item>
      <ion-label position="floating">Ingredient name </ion-label>
      <ion-input v-model="newIngredient.name" type="text" />
    </ion-item>
    <ion-item>
      <ion-label position="floating">Unité</ion-label>
      <ion-select placeholder="Select a unit" v-model="newIngredient.unit">
        <ion-select-option v-for="unit in optionUnits" :key="unit">
          {{ unit }}
        </ion-select-option>
      </ion-select>
    </ion-item>
    <ion-button color="primary" @click="addIngredient(newIngredient)">
      Add
    </ion-button>
  </ion-content>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useUpsert } from '@/composition-functions/requests/handleRequests';
import { IngredientModel } from '@/Models/Ingredient';
import { nanoid } from 'nanoid';

export default defineComponent({
  setup() {
    const upsertIngredient = useUpsert<IngredientModel>('ingredients');

    return {
      upsertIngredient
    };
  },
  data() {
    return {
      optionUnits: ['g', 'unit', 'cl'],
      newIngredient: {} as IngredientModel
    };
  },
  props: {
    ingredients: {
      type: Array as PropType<IngredientModel[]>,
      default: [] as IngredientModel[]
    }
  },
  emits: ['form-consumed'],
  methods: {
    addIngredient(ingredient: IngredientModel) {
      if (!ingredient.name) return;
      // TODO : Add message to add cumpolsory name
      // If we want to update an ingredient, the id always exists
      // We want to look for existant id only if the current id is empty
      // empty _id means new ingredient
      if (!ingredient._id) {
        let insertId = nanoid();
        const idExists = (id: string, ingredients: IngredientModel[]) =>
          ingredients.find(ing => ing._id === id);

        while (idExists(insertId, this.ingredients)) {
          insertId = nanoid();
        }
        ingredient._id = insertId;
      }

      this.upsertIngredient(ingredient)
        .then(() => {
          this.$emit('form-consumed', ingredient);
          this.newIngredient = {} as IngredientModel;
        })
        .catch(e => {
          console.error(e);
          // TODO : write error message on screen
        });
    },
    consumeForm(object) {
      this.$emit('form-consumed', object);
    }
  }
});
</script>

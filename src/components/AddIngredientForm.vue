<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title> Add ingredient </ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-item>
        <ion-label position="floating">Ingredient name </ion-label>
        <ion-input v-model="upsertedIngredient.name" type="text" />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Unité</ion-label>
        <ion-select
          placeholder="Select a unit"
          v-model="upsertedIngredient.unit"
        >
          <ion-select-option v-for="unit in optionUnits" :key="unit">
            {{ unit }}
          </ion-select-option>
        </ion-select>
      </ion-item>
      <ion-button color="primary" @click="addIngredient"> Add </ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent, inject, PropType } from 'vue';
import { useUpsert } from '@/composition-functions/requests/handleRequests';

import { IngredientModel } from '@/Models/Ingredient';
import { nanoid } from 'nanoid';
import {
  ingredientStateIdentifier,
  IngredientStore
} from './local-states/IngredientState';

export default defineComponent({
  setup() {
    const upsertIngredient = useUpsert<IngredientModel>('ingredients');
    const localStore = inject(ingredientStateIdentifier) as IngredientStore;
    return {
      upsertIngredient,
      localStore
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
  emits: ['upserted-ingredient'],
  computed: {
    upsertedIngredient: {
      get(): IngredientModel {
        return this.localStore.state.selectedIngredient;
      },
      set(value: IngredientModel): void {
        this.localStore.mutateIngredient(value);
      }
    }
  },
  methods: {
    addIngredient() {
      if (!this.upsertedIngredient.name) return;
      // TODO : Add message to add cumpolsory name
      // If we want to update an ingredient, the id always exists
      // We want to look for existant id only if the current id is empty
      // empty _id means new ingredient
      if (!this.upsertedIngredient._id) {
        let insertId = nanoid();
        const idExists = (id: string, ingredients: IngredientModel[]) =>
          ingredients.find((ing) => ing._id === id);

        while (idExists(insertId, this.ingredients)) {
          insertId = nanoid();
        }
        this.upsertedIngredient._id = insertId;
      }

      this.upsertIngredient(this.upsertedIngredient)
        .then(() => {
          this.$emit('upserted-ingredient', this.upsertedIngredient);
          this.upsertedIngredient = {} as IngredientModel;
        })
        .catch((e) => {
          console.error(e);
          // TODO : write error message on screen
        });
    }
  }
});
</script>

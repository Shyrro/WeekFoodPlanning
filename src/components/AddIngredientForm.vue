<template>
  <Card class="p-shadow-2 form-card">
    <template #title>
      Add ingredient
    </template>
    <template #content>
      <div class="p-fluid">
        <span class="p-float-label p-field">
          <InputText
            v-model="upsertedIngredient.name"
            id="ingredient-name"
            type="text"
          />
          <label for="ingredient-name">Ingredient name </label>
        </span>
        <Dropdown
          v-model="upsertedIngredient.unit"
          :options="optionUnits"
          placeholder="Select a unit"
        />
        <span class="p-text-left">Tag color : </span>
        <ColorPicker id="color-picker" v-model="upsertedIngredient.color" />
      </div>

      <Button class="p-button-outlined" label="Add" @click="addIngredient" />
    </template>
  </Card>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, inject, PropType } from 'vue';
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
  components: {
    ColorPicker: defineAsyncComponent(() => import('primevue/colorpicker'))
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
          ingredients.find(ing => ing._id === id);

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
        .catch(e => {
          console.error(e);
          // TODO : write error message on screen
        });
    }
  }
});
</script>
<style lang="scss" scoped>
.form-card {
  .p-card-body {
    .p-card-content {
      display: flex;
      flex-direction: column;
    }
    .p-fluid {
      display: flex;
      flex-direction: column;
    }
  }

  .p-button {
    align-self: flex-end;
  }
}
</style>

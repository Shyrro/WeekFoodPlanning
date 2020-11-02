<template>
  <Card class="p-shadow-4 form-card">
    <template #title>
      Add ingredient
    </template>
    <template #content>
      <div class="p-fluid ">
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
import { defineAsyncComponent, defineComponent, PropType } from 'vue';
import { useUpsert } from '@/composition-functions/requests/handleRequests';
import { Ingredient } from '@/Models/Ingredient';
import { nanoid } from 'nanoid';

export default defineComponent({
  setup() {
    const upsertIngredient = useUpsert<Ingredient>('ingredients');

    return {
      upsertIngredient
    };
  },
  components: {
    ColorPicker: defineAsyncComponent(() => import('primevue/colorpicker'))
  },
  data() {
    return {
      optionUnits: ['g', 'unit', 'cl'],
      newIngredient: {} as Ingredient
      // name: '',
      // color: '',
      // unit: ''
    };
  },
  props: {
    ingredients: {
      type: Array as PropType<Ingredient[]>,
      default: [] as Ingredient[]
    },
    selectedIngredient: {
      type: Object as PropType<Ingredient>,
      default: {} as Ingredient
    }
  },
  emits: ['upserted-ingredient'],
  computed: {
    upsertedIngredient: {
      get(): Ingredient {
        return this.selectedIngredient || this.newIngredient;
      },
      set(value: Ingredient): void {
        this.newIngredient = value;
      }
    }
  },
  methods: {
    addIngredient() {
      if (!this.selectedIngredient.name) return;
      // TODO : Add message to add cumpolsory name
      // If we want to update an ingredient, the id always exists
      // We want to look for existant id only if the current id is empty
      // empty _id means new ingredient
      if (!this.selectedIngredient._id) {
        let insertId = nanoid();
        const idExists = (id: string, ingredients: Ingredient[]) =>
          ingredients.find(ing => ing._id === id);

        while (idExists(insertId, this.ingredients)) {
          insertId = nanoid();
        }
        this.upsertedIngredient._id = insertId;
      }

      this.upsertIngredient(this.selectedIngredient)
        .then(() => {
          this.$emit('upserted-ingredient', this.upsertedIngredient);
          this.upsertedIngredient = {} as Ingredient;
        })
        .catch(e => {
          console.error(e);
          // TODO : write error message on screen
        });
    }
  }
});
</script>
<style scoped>
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
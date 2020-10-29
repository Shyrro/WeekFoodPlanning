<template>
  <div v-if="componentMounted">
    <div class="p-grid">
      <div class="p-col-12 p-md-6 p-lg-6">
        <Card class="p-shadow-4">
          <template #title>
            Add ingredient
          </template>
          <template #content>
            <div class="p-fluid">
              <span class="p-float-label p-field">
                <InputText
                  type="text"
                  id="ingredient-name"
                  v-model="selectedIngredient.name"
                />
                <label for="ingredient-name">Ingredient name </label>
              </span>
              <Dropdown
                v-model="selectedIngredient.unit"
                :options="optionUnits"
                optionLabel="name"
                placeholder="Select a unit"
              />
              <span class="p-text-left">ColorPicker : </span>
              <ColorPicker
                id="color-picker"
                v-model="selectedIngredient.color"
              />
            </div>

            <Button label="Add" @click="addIngredient" />
          </template>
        </Card>
      </div>
      <div class="p-col-12 p-md-6 p-lg-6">
        <!-- list of ingredients  -->
        <Card class="p-shadow-4">
          <template #title>
            Existant ingredients
          </template>
          <template #content>
            <ProgressSpinner v-if="!ingredientsLoaded" />
            <span
              v-for="ingredient in ingredients"
              :key="ingredient._id"
              class="p-tag p-tag-rounded p-shadow-2 tag-size"
              style="background: red"
            >
              {{ ingredient.name }}
            </span>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { nanoid } from "nanoid";
import { Ingredient } from "@/Models/Ingredient";
import { defineComponent } from "vue";
import { useHideComponentOnTransition } from "@/composition-functions/transitions/handleTransitions";
import {
  useFetch,
  useUpsert
} from "@/composition-functions/requests/handleRequests";
import ColorPicker from "primevue/colorpicker";

export default defineComponent({
  name: "IngredientsScreen",
  setup() {
    const componentMounted = useHideComponentOnTransition();
    const ingredients = useFetch<Ingredient>("ingredients");
    const upsertIngredient = useUpsert<Ingredient>("ingredients");

    return {
      componentMounted,
      ingredients,
      upsertIngredient
    };
  },
  components: {
    ColorPicker
  },
  data() {
    return {
      selectedIngredient: {} as Ingredient,
      theme: "dark",
      optionUnits: [
        {
          code: "1",
          name: "g"
        },
        {
          code: "2",
          name: "unit"
        },
        {
          code: "3",
          name: "cl"
        }
      ]
    };
  },
  computed: {
    ingredientsLoaded(): boolean {
      return this.ingredients.length > 0;
    }
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
    addIngredient() {
      let insertId = nanoid();

      const idExists = (id: string, ingredients: Ingredient[]) =>
        ingredients.find(ing => ing._id === id);

      while (idExists(insertId, this.ingredients)) {
        insertId = nanoid();
      }

      this.selectedIngredient._id = insertId;

      this.upsertIngredient(this.selectedIngredient).then(() => {
        this.ingredients.push(this.selectedIngredient);
        this.selectedIngredient = {} as Ingredient;
      });
    }
  }
});
</script>
<style lang="scss">
.p-card {
  transition: all 0.3s ease-in-out;
}

.tag-size {
  font-size: 2em;
  margin: 2px;
}
</style>

<template>
  <div v-if="componentMounted">
    <div class="p-grid">
      <div class="p-col-12 p-md-6 p-lg-6">
        <Card class="p-fluid">
          <template #title>
            Add ingredients
          </template>
          <template #content>
            <span class="p-float-label p-field">
              <InputText
                type="text"
                id="ingredient-name"
                v-model="ingredientName"
              />
              <label for="ingredient-name">Ingredient name</label>
            </span>
            <Dropdown
              v-model="selectedUnit"
              :options="optionUnits"
              optionLabel="name"
              placeholder="Select a unit"
            />

            <ColorPicker id="color-picker" v-model="colorPicked" />
            <Button>
              Add
            </Button>
          </template>
        </Card>
      </div>
      <div class="p-col-12 p-md-6 p-lg-6">
        <!-- list of ingredients  -->
        <Card>
          <template #title>
            Existant ingredients
          </template>
          <template #content>
            <span
              v-for="ingredient in ingredients"
              :key="ingredient._id"
              class="p-tag p-tag-rounded"
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
import { Ingredient } from "@/Models/Ingredient";
import { defineComponent } from "vue";
import { useHideComponentOnTransition } from "@/composition-functions/transitions/handleTransitions";
import { useFetch } from "@/composition-functions/requests/handleRequests";
import ColorPicker from "primevue/colorpicker";

export default defineComponent({
  name: "IngredientsScreen",
  setup() {
    const componentMounted = useHideComponentOnTransition();
    const ingredients = useFetch<Ingredient>("ingredients");

    return {
      componentMounted,
      ingredients
    };
  },
  components: {
    ColorPicker
  },
  data() {
    return {
      ingredientName: "",
      selectedUnit: null,
      theme: "dark",
      colorPicked: "FFFF",
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
  methods: {
    goBack() {
      router.go(-1);
    },
    changeTheme() {
      import(
        `primevue/resources/themes/bootstrap4-${this.theme}-purple/theme.css`
      );
    }
  }
});
</script>
<style lang="scss">
.semi-panel {
}
</style>

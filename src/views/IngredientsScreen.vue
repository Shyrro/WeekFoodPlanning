<template>
  <div v-if="componentMounted">
    <div class="p-grid">
      <div class="p-col-12 p-md-6 p-lg-6">
        <Card class="p-fluid">
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
          </template>
        </Card>
        <Button class="p-col p-md-3">
              Add
            </Button>
      </div>
      <div class="p-col-12 p-md-6  p-lg-6">
        <!-- list of ingredients  -->
        <Card>
          prout
        </Card>
      </div>
      <!-- <Button @click="goBack">
        Go back
      </Button>
      <Button @click="changeTheme()">
        Change Theme
      </Button> -->
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { defineComponent } from "vue";
import { useHideComponentOnTransition } from "@/composition-functions/transitions/handleTransitions";

export default defineComponent({
  name: "IngredientsScreen",
  setup() {
    const componentMounted = useHideComponentOnTransition();

    return {
      componentMounted
    };
  },
  data() {
    return {
      ingredientName: "test",
      selectedUnit: null,
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

import { IngredientModel } from '@/Models/Ingredient';
import { reactive } from 'vue';

export const ingredientStateIdentifier = Symbol('Ingredients');

export interface IngredientStore {
  mutateIngredient: (payload: IngredientModel) => void;
  state: IngredientState;
}

export interface IngredientState {
  selectedIngredient: IngredientModel;
}

export const createLocalStore = () => {
  const selectedIngredient = {} as IngredientModel;

  const localState = reactive({ selectedIngredient });

  const mutateIngredient = (payload: IngredientModel) => {    
    localState.selectedIngredient = payload;
  };
  const localStore: IngredientStore = {
    mutateIngredient,
    state: localState
  };

  return localStore;
};

import { Ingredient } from '@/Models/Ingredient';
import { reactive, inject, readonly, provide } from 'vue';

const stateIdentifier = Symbol('Ingredients');

export const createLocalState = () => {
  const selectedIngredient = {} as Ingredient;

  const localState = reactive({ selectedIngredient });

  const mutateIngredient = (payload: Ingredient) => {
    localState.selectedIngredient = payload;
  };

  return { mutateIngredient, state: readonly(localState) };
};

export const useLocalState = inject(stateIdentifier);
export const provideLocalState = provide(stateIdentifier, createLocalState());

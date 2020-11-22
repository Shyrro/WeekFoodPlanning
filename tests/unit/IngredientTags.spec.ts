import { shallowMount } from '@vue/test-utils';
import IngredientTags from '@/components/IngredientTags.vue';
import { Card } from 'primevue/card';

describe('Ingredient Tags', () => {
  const wrapper = shallowMount(IngredientTags);

  it('should display a card', () => {
    const card = wrapper.findComponent(Card);

    expect(card.exists()).toBeTruthy();
  });
});

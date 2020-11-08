import { shallowMount } from '@vue/test-utils';
import ColoredTags from '@/components/ColoredTags.vue';

describe('Colored Tags', () => {
  const list = [
    {
      _id: '1',
      name: 'Oignon',
      color: 'ffee4a'
    },
    {
      _id: '2',
      name: 'Tomato',
      color: 'fff'
    },
    {
      _id: '3',
      name: 'Beef',
      color: 'eaecef'
    }
  ];

  const wrapper = shallowMount(ColoredTags, {
    propsData: {
      list
    }
  });

  it('should render as much tags as objects in list', () => {
    // Arrange/Act
    const tags = wrapper.findAll('.p-tag');

    // Assert
    expect(tags.length).toEqual(list.length);
  });

  it('should apply background color', () => {
    // Arrange/Act
    const firstTag = wrapper.find('[style="background: rgb(255, 238, 74);"]');
    const secondTag = wrapper.find('[style="background: rgb(255, 255, 255);"]');
    const thirdTag = wrapper.find('[style="background: rgb(234, 236, 239);"]');

    // Assert
    expect(firstTag.exists()).toBe(true);
    expect(secondTag.exists()).toBe(true);
    expect(thirdTag.exists()).toBe(true);
  });

  it('should display item name', () => {
    // Arrange/Act
    const firstTag = wrapper.findAll('.p-tag')[0];
    const firstTagValue = firstTag.text();

    // Assert
    expect(firstTagValue).toEqual(list[0].name);
  });

  it('should emit "select-item" event on click', async () => {
    // Arrange
    const firstTag = wrapper.findAll('.p-tag')[0];

    // Act
    await firstTag.trigger('click');

    // Assert
    expect(wrapper.emitted('select-item')).toBeTruthy();
  });
});

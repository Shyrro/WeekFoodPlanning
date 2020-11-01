import { onMounted, ref } from 'vue';

export function useHideComponentOnTransition() {
  const componentMounted = ref(false);
  onMounted(() => {
    setTimeout(function() {
      componentMounted.value = true;
    }, 400);
  });

  return componentMounted;
}

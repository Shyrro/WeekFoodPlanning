<template>
  <div>
    <ul>
      <li
        v-for="item in list"
        :key="item._id"
        class="p-tag p-tag-rounded tag-size"
        :style="`background:#${item.color}`"
        @click="selectItem(item)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    list: {
      type: Array
    }
  },
  emits: ['select-item'],
  methods: {
    selectItem(item) {
      this.$emit('select-item', item);
    }
  }
});
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;

  .tag-size {
    font-size: 1em;
  }
}
</style>

<template>
  <div>
    <ul>
      <li
        v-for="item in list"
        :key="item._id"
        class="tag"
        :style="`background:#${item.color}`"
        @click="selectItem(item)"
      >
        <ion-chip>{{ item.name }}</ion-chip>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonChip } from '@ionic/vue';

export default defineComponent({
  props: {
    list: {
      type: Array
    }
  },
  components: {
    IonChip
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

  .tag {
    display: inline-block;
    font-size: 1em;
  }
}
</style>

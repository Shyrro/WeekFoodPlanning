<template>
  <div>
    <div>
      <ion-button shape="round" @click="goBack">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </ion-button>
    </div>
    <div>
      <slot name="left-panel"> </slot>
    </div>
    <div>
      <slot name="right-panel"> </slot>
    </div>
  </div>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FillableScreen',
  methods: {
    goBack() {
      router.go(-1);
    }
  }
});
</script>
<style lang="scss">
.tag-size {
  font-size: 2em;
  margin: 2px;
}
.form-card {
  .p-card-body {
    .p-card-content {
      display: flex;
      flex-direction: column;
    }
    .p-fluid {
      display: flex;
      flex-direction: column;
    }
  }

  .p-button {
    align-self: flex-end;
  }
}
</style>

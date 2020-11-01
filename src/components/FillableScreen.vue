<template>
  <div>
    <div class="p-grid">
      <div class="p-col-12 p-md-12 p-lg-12">
        <Button
          class="p-button-rounded p-button-text"
          icon="pi pi-angle-left"
          @click="goBack"
        />
      </div>
      <div class="p-col-12 p-md-6 p-lg-6">
        <slot name="left-panel"> </slot>
      </div>
      <div class="p-col-12 p-md-6 p-lg-6">
        <slot name="right-panel"> </slot>
      </div>
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

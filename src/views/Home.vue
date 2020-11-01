<template>
  <div class="container mx-auto grid grid-flow-row gap-5">
    <h2 class="header-text text-4xl text-center">My food friend</h2>
    <router-view v-slot="{ Component }">
      <transition name="slide">
        <component :is="Component" />
      </transition>
    </router-view>
    <span class="separator"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home'
});
</script>
<style lang="scss">
.header-text {
  font-family: 'SweetsDelight';
  padding: 20px;

  text-shadow: 0px 0px 2px white, 4px 3px 0px white;
}

.container {
  padding: 15px;
}

.separator {
  height: 2px;
  @apply bg-gray-300 flex-grow;
}

.slide-leave-active,
.slide-enter-active {
  transition: 0.4s ease-in-out;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>

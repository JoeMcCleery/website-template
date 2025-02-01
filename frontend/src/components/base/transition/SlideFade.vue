<template>
  <Transition mode="out-in">
    <slot />
  </Transition>
</template>

<style lang="css" scoped>
@reference '~/assets/css/main.css';

.v-enter-active,
.v-leave-active {
  @apply transition-[opacity,_transform];
}

.v-enter-active {
  @apply ease-in;
}

.v-leave-active {
  @apply ease-out;
}

.v-enter-from {
  opacity: 0;
  transform: translateX(-0.1rem);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(0.1rem);
}
</style>

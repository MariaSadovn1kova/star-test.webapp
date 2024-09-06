<script setup lang="ts">
import { defineAsyncComponent, computed } from 'vue';

interface IProps {
  name: string
}

const props = defineProps<IProps>();

const dynamicComponent = computed(() => {
  return defineAsyncComponent(() => import(`@/assets/svg/${props.name}.vue`));
});
</script>

<template>
  <component :is="dynamicComponent" />
</template>
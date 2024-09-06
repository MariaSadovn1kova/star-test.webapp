<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { StatSvgLoader } from "@/shared";

interface IProps {
  path: string
  iconName: string
}

const props = defineProps<IProps>();
</script>

<template>

  <RouterLink 
    class="stat-sidebar-media-btn"
    :to="path"
  >
    <StatSvgLoader 
      :name="iconName"
    />
  </RouterLink>

</template>

<style scoped lang="postcss">
.stat-sidebar-media-btn {
  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid var(--color-sidebar-media-border);
  border-radius: 100px;
}
</style>

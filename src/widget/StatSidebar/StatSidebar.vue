<script setup lang="ts">
import { 
  StatSidebarLogo,
  StatMedia,
  StatNavigation
} from './ui';
</script>

<template>

  <div class="stat-sidebar">
    <StatSidebarLogo />
    <StatNavigation />
    <StatMedia class="stat-sidebar__last-item" />
  </div>

</template>

<style scoped lang="postcss">
.stat-sidebar {
  width: 240px;
  height: 100vh;
  padding-bottom: 24px;
  position: fixed;

  display: flex;
  flex-direction: column;

  background: var(--color-sidebar-background);
  color: var(--color-sidebar-font);
}

.stat-sidebar__last-item {
  margin-top: auto;
}
</style>

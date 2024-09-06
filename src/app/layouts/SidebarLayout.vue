<script setup lang="ts">
import { StatSidebar } from '@/widget';
</script>

<template>

  <div class="app-wrapper">
    
    <StatSidebar />
    
    <main>
      <router-view />
    </main>

  </div>

</template>

<style scoped lang="postcss">
.app-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
}
</style>

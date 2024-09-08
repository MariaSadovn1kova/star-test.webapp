<script setup lang="ts">

</script>

<template>
  <div class="stat-container">
    <slot />
  </div>
</template>

<style scoped lang="postcss">
.stat-container {
  padding: 30px;
  
  border-radius: 8px;
  background: var(--color-container-background);
}
</style>

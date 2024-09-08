<script setup lang="ts">
interface IProps {
  content: string
}

const props = defineProps<IProps>();
</script>

<template>
  <p class="stat-chip">
    {{ content }}
  </p>
</template>

<style scoped lang="postcss">
.stat-chip {
  height: 24px;
  max-width: 72px;
  padding: 2px 28px;

  border-radius: 4px;
  background: var(--color-chip-background);

  font-size: 13px;
  line-height: 24px; 
  color: var(--color-chip-text);
}
</style>

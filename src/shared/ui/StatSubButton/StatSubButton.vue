<script setup lang="ts">
interface IProps {
  text: string
}

const props = defineProps<IProps>();
</script>

<template>
  <button class="stat-sub-button">{{ text }}</button>
</template>

<style scoped lang="postcss">
.stat-sub-button {
  padding: 4px 8px;

  border: none;
  border-radius: 4px;
  background: var(--color-sub-button-background);
  cursor: pointer;

  font-family: 'Lato-Ligth';
  color: var(--color-sub-button-text);
  font-size: 12px;
  line-height: 18px;
}
</style>

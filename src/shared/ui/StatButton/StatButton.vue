<script setup lang="ts">
import { StatSvgLoader } from "@/shared";

interface IProps {
  iconName?: string
  text: string
}

const props = defineProps<IProps>();
</script>

<template>
  <button class="stat-button">
    <StatSvgLoader
      v-if="iconName" 
      :name="iconName"
    />

    <span class="stat-button__text">{{ text }}</span>
  </button>
</template>

<style scoped lang="postcss">
.stat-button {
  height: 40px;
  padding: 10px 16px;

  display: flex;
  align-items: center;
  gap: 4px;

  border-radius: 4px;
  background: transparent;
  border: 1px solid var(--color-button-border);

  font-family: 'Lato';
  font-size: 14px;

  cursor: pointer;
}

.stat-button__text {
  margin-top: 1px;
  line-height: 20px; 
  vertical-align: middle;
}
</style>

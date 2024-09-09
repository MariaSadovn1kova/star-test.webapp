<script setup lang="ts">
import { StatSvgLoader } from "@/shared";

interface IProps {
  type: string
  iconName: string
}

const props = defineProps<IProps>();
</script>

<template>
  <button 
    class="input-button"
    :class="`input-button--${type}`"
  >
    <StatSvgLoader :name="iconName" />
  </button>
</template>

<style scoped lang="postcss">
.input-button {
  width: 20px;
  height: 20px;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  cursor: pointer;
}

.input-button--confirm {
  border: none;
  background: var(--color-input-button-confirm-background);
}

.input-button--refuse {
  background: transparent;
  border: 1px solid var(--color-input-button-refuse-border);
}
</style>

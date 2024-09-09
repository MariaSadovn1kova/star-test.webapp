<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { StatSvgLoader } from "@/shared";

const { t } = useI18n();
</script>

<template>

  <div class="container">
   
    <div class="container__title">
      <StatSvgLoader name="size_range"/>
      <span>{{ t('warehouse-table.size_range') }}</span>
    </div>

    <slot />

  </div>

</template>

<style scoped lang="postcss">
.container {
  padding: 12px 24px;

  background: var(--color-subtable-background);
  border-left: 4px solid var(--color-subtable-border);
  border-radius: 4px;
}

.container__title {
  height: 48px;

  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 12px;
}
</style>

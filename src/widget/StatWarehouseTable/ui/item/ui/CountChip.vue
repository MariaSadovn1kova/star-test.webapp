<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

interface IProps {
  content: number
}

const props = defineProps<IProps>();

const { t } = useI18n();

const chip = computed<string>(() => `${ t(`warehouse-table.enough_for`)} ${ props.content } дней`);
</script>

<template>
  <span class="count-chip">{{ chip }}</span>
</template>

<style scoped lang="postcss">
.count-chip {
  width: 138px;
  padding: 5px 14px;

  background: var(--color-count-chip-background);
  border-radius: 4px;

  color: var(--color-count-chip-text);
  font-size: 12px;
}
</style>

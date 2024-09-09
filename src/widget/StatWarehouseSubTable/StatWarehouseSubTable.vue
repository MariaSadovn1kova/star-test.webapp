<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import type { ISizeRange } from '@/shared';
import { StatSvgLoader, StatChip, StatSubButton } from "@/shared";

interface IProps {
  items: ISizeRange[]
}

const props = defineProps<IProps>();

const { t } = useI18n();

const subTableHeaderItems: string[] = [
  t('warehouse-table.size'),
  t('warehouse-table.remains_WB'),
  t('warehouse-table.enough_for'),
  t('warehouse-table.remains_provider'),
  t('warehouse-table.enough_for'),
  t('warehouse-table.remains_warehouse'),
  t('warehouse-table.enough_for'),
  t('warehouse-table.remains_all'),
  t('warehouse-table.on_the_way'),
  t('warehouse-table.orders_speed'),
  t('warehouse-table.change_hidtory'),
]
</script>

<template>

  <div class="sub-table">

    <div class="sub-table__head">
      <div
        class="sub-table__head-item"
        v-for="headerItem in subTableHeaderItems"
        :key="headerItem"
      >
        <span>{{ headerItem }}</span>
      </div>
    </div>

    <div
      class="sub-table__row"
      v-for="item in items"
      :key="item.id"
    >

      <div class="sub-table__row-item">
        <StatChip :content="item.size.toString()"/>
      </div>

      <div class="sub-table__row-item">
        <span>{{ item.remainsWB }}</span>
      </div>

      <div class="sub-table__row-item">
        <span>{{ item.remainsWB }}</span>
      </div>

      <div class="sub-table__row-item">
        <span>{{ item.remainsWB }}</span>
      </div>

      <div class="sub-table__row-item">
        <span>{{ item.remainsWB }}</span>
      </div>

      <div class="sub-table__row-item">
        <span>{{ item.remainsWB }}</span>
      </div>

      <div class="sub-table__row-item">
        <span>{{ item.remainsWB }}</span>
      </div>

      <div class="sub-table__row-item">
        <span>{{ item.remainsWB }}</span>
      </div>

      <div class="sub-table__row-item">
        <span>{{ item.remainsWB }}</span>
      </div>

      <div class="sub-table__row-item">
        <span>{{ item.remainsWB }}</span>
      </div>

      <div class="sub-table__row-item">
        <StatSubButton :text="t('btns.watch')"/>
      </div>

    </div>

  </div>

</template>

<style scoped lang="postcss">
.sub-table {

}

.sub-table__head {
  height: 48px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));

  color: var(--color-subtable-head-text);
  font-size: 12px;
  text-align: left;
}

.sub-table__head-item {
  height: 48px;
  padding: 0 16px;

  display: flex;
  align-items: center;

  line-height: 16px;
}

.sub-table__row {
  height: 48px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));

  background: var(--color-subtable-item-background);
  border-bottom: 1px solid var(--color-subtable-item-border);
}

.sub-table__row-item {
  height: 48px;
  padding: 0 16px;

  display: flex;
  align-items: center;

  line-height: 16px;
  font-size: 14px;
}

</style>

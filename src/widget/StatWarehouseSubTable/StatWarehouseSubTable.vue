<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import type { ISizeRange } from '@/shared';
import { StatSvgLoader, StatChip, StatSubButton, StatCountInput } from "@/shared";

interface IProps {
  items: ISizeRange[]
}

const props = defineProps<IProps>();

const { t } = useI18n();

const defaultInterval = ref('2 дня');

const subTableHeaderItems: string[] = [
  t('warehouse-table.size'),
  t('warehouse-table.remains_WB'),
  t('warehouse-table.enough_for'),
  t('warehouse-table.remains_provider'),
  t('warehouse-table.enough_for'),
  t('warehouse-table.remains_warehouse'),
  t('warehouse-table.enough_for'),
  t('warehouse-table.remains_all'),
  t('warehouse-table.enough_for'),
  t('warehouse-table.on_the_way'),
  t('warehouse-table.orders_speed'),
  t('warehouse-table.change_hidtory'),
]

const countFormat = (num: number, unit: string):string => {
  return `${num}  ${unit}`
}
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
        <span>{{ countFormat(item.remainsWB, 'шт.') }}</span>
      </div>

      <div class="sub-table__row-item">
        <span>{{ defaultInterval }}</span>
      </div>

      <div class="sub-table__row-item">
        <span>{{ countFormat(item.remainsProvider, 'шт.') }}</span>
      </div>

      <div class="sub-table__row-item">
        <span>{{ defaultInterval }}</span>
      </div>

      <div class="sub-table__row-item">
        <StatCountInput 
          v-model="item.remainsWarehouse"
          unit="шт."
        />
      </div>

      <div class="sub-table__row-item">
        <span>{{ defaultInterval }}</span>
      </div>

      <div class="sub-table__row-item">
        <span>{{ countFormat(item.remainsAll, 'шт.') }}</span>
      </div>

      <div class="sub-table__row-item">
        <span>{{ defaultInterval }}</span>
      </div>

      <div class="sub-table__row-item">
        <StatCountInput 
          v-model="item.onTheWay"
          unit="шт."
        />
      </div>

      <div class="sub-table__row-item">
        <span>{{ countFormat(5, 'шт. / день') }}</span>
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
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

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
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

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

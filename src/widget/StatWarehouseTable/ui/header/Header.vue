<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

import { HeaderDefaultItem } from './ui';
import { StatSvgLoader, StatCountInput } from "@/shared";

const { t } = useI18n();

const defaultInterval = ref(7);

interface IDefaultItem {
  title: string
  withSubText: boolean
  withTip: boolean
}

const headerDefaultItems: IDefaultItem[] = [
  { title: t('warehouse-table.remains_WB'), withSubText: true, withTip: true },
  { title: t('warehouse-table.remains_provider'), withSubText: true, withTip: true },
  { title: t('warehouse-table.remains_warehouse'), withSubText: true, withTip: true },
  { title: t('warehouse-table.remains_all'), withSubText: true, withTip: false },
  { title: t('warehouse-table.on_the_way'), withSubText: false, withTip: true }
]
</script>

<template>

  <div class="header">

    <div class="header__item">
      <span> {{ t('warehouse-table.product') }} </span>
    </div>

    <HeaderDefaultItem 
      v-for="headerItem in headerDefaultItems"
      :key="headerItem.title"
      :text="headerItem.title"
      :with-sub-text="headerItem.withSubText"
      :with-tip="headerItem.withTip"
    />

    <div class="header__item--column">
      <div class="header__item-row">
        <span> {{ t('warehouse-table.orders_speed') }} </span>
        <StatSvgLoader name="filter"/>
      </div>
      <div class="header__item-row">
        <span> {{ t('warehouse-table.behind') }} </span>
        <StatCountInput v-model="defaultInterval" unit="дней"/>
        <StatSvgLoader name="tip"/>
      </div>
    </div>

    <div class="header__item">
      <span> {{ t('warehouse-table.change_hidtory') }} </span>
    </div>

  </div>

</template>

<style scoped lang="postcss">
.header {
  height: 56px;
  padding: 7px 20px;

  display: grid;
  grid-template-columns: 385px 141px 184px 168px 132px 144px 150px 84px;
  gap: 16px;

  background: var(--color-warehouse-table-header);
  border-radius: 4px;

  font-family: 'Lato-Ligth';
  font-size: 13px;
  color: var(--color-warehouse-table-header-text);
}

.header__item {
  display: flex;
  align-items: center;

  span {
    line-height: 18px;
  }
}

.header__item-row {
  display: flex;
  gap: 4px;
}

.header__item-row--column {
  display: flex;
  flex-direction: column;
}
</style>

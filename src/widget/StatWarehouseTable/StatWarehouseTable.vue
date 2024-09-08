<script setup lang="ts">
import { StatWarehouseHeader, StatWarehouseItem } from './ui';
import type { IWarehouseItem } from '@/shared';

interface IProps {
  tableItems: IWarehouseItem[]
}

const props = defineProps<IProps>();
</script>

<template>

  <div class="stat-warehouse-table">
    <StatWarehouseHeader />
    <div class="stat-warehouse-table__content">
      <StatWarehouseItem 
        v-for="item in tableItems"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>

</template>

<style scoped lang="postcss">
.stat-warehouse-table {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.stat-warehouse-table__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>

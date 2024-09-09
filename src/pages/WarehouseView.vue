<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

import { StatWarehouseTable } from '@/widget';
import { useWarehouseStore } from '@/entities';
import type { IWarehouseItem } from '@/shared';

const { t } = useI18n();
const warehouseStore = useWarehouseStore();

const totalCount = computed<number>(() => warehouseStore.getTotalCount);
const wareHouseItems = computed<IWarehouseItem[]>(() => warehouseStore.getWarehouseItems);

onMounted(warehouseStore.fetchWarehouse);
</script>

<template>
  <div class="warehouse">
    <p class="warehouse__title">Товары: <span>{{ totalCount }} шт.</span></p>
    <StatWarehouseTable 
      :table-items="wareHouseItems"
    />
  </div>
</template>

<style scoped lang="postcss">
.warehouse {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.warehouse__title {
  font-size: 18px;
  font-family: 'Lato-Semibold';

  span {
    color: var(--color-warehouse-title-count);
  }
}
</style>


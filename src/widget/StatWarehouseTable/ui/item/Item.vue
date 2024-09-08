<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

import type { IWarehouseItem } from '@/shared';
import { StatSvgLoader } from "@/shared";
import { StatSubTable } from './ui';

interface IProps {
  item: IWarehouseItem
}

const props = defineProps<IProps>();

const { t } = useI18n();

const isActive = ref(false);

const toggleActive = ():void => {
  isActive.value = !isActive.value;
}
</script>

<template>

  <div class="item">

    <div class="item__grid">
      <img :src="item.img" alt="">
    </div>

    <div 
      class="item__sub-table"
      v-if="item.sizeRange"
    >
      <button 
        class="item__btn"
        @click="toggleActive"
      >
        <span>{{ t(`warehouse-table.size_range`) }}</span>
        <StatSvgLoader
          name="toggle"
          :style="isActive ? 'transform: rotate(180deg); transition-duration: 0.5s' : 'transform: rotate(0deg); transition-duration: 0.5s'"
        />
      </button>
      <Transition name="slide-fade">
        <StatSubTable 
          v-if="isActive"
          :items="item.sizeRange"
        />
      </Transition>
    </div>

  </div>

</template>

<style scoped lang="postcss">
.item {
  padding: 20px;

  border: 1px solid var(--color-warehouse-table-item-border);
  border-radius: 4px;
}

.item__btn {
  padding: 0;

  display: flex;
  align-items: center;
  gap: 8px;

  border: none;
  background: transparent;
  cursor: pointer;

  span {
    font-family: 'Lato';
    font-size: 13px;
    color: var(--color-warehouse-table-button-text);
    border-bottom: 1px dotted var(--color-warehouse-table-button-text);
  }
}

.item__sub-table {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition:all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>

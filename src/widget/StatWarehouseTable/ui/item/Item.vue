<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

import type { IWarehouseItem } from '@/shared';
import { StatSvgLoader, StatCountInput, numberFormatting, StatSubButton } from "@/shared";
import { StatWarehouseSubTable } from '@/widget';
import { StatSubTableContainer, StatSubTableCountChip } from './ui';

interface IProps {
  item: IWarehouseItem
}

const props = defineProps<IProps>();

const { t } = useI18n();

const isActive = ref(false);
const defaultExpenditure = ref('150 шт. / 30 дней');

const toggleActive = ():void => {
  isActive.value = !isActive.value;
}

const title = computed<string>(() => `${props.item.title.slice(0, 72)}...`);
const article = computed<string>(() => `${ t(`warehouse-table.article`)} ${ props.item.articleWB }`);

const remainsProvider = computed<string>(() => `${ numberFormatting(props.item.remainsProvider)} шт.`);
const remainsAll = computed<string>(() => `${ numberFormatting(props.item.remainsAll)} шт.`);
const remainsWarehouse = computed<string>(() => `${ numberFormatting(props.item.remainsWarehouse)} шт.`);
</script>

<template>

  <div class="item">

    <div class="item__grid">

      <div class="item__grid-cell--first">
        <div class="item__grid-img">
          <img :src="item.img">
        </div>
        <div>
          <div class="item__grid-title">
            <span>{{ title }}</span>
            <StatSvgLoader name="link" />
            <StatSvgLoader name="info" />
          </div>
          <span class="item__grid-article">{{ article }} </span>
        </div>
      </div>

      <div class="item__grid-cell">
        <StatCountInput 
          v-model="item.remainsWB"
          unit="шт."
        />
        <StatSubTableCountChip :content="549" />
      </div>

      <div class="item__grid-cell">
        <span>{{ remainsProvider }}</span>
        <StatSubTableCountChip :content="549" />
      </div>
      
      <div class="item__grid-cell">
        <StatCountInput 
          v-if="!item.sizeRange"
          v-model="item.remainsWarehouse"
          unit="шт."
        />
        <span v-else>{{ remainsWarehouse }}</span>
        <StatSubTableCountChip :content="549" />
      </div>

      <div class="item__grid-cell">
        <span>{{ remainsAll }}</span>
        <StatSubTableCountChip :content="549" />
      </div>

      <div class="item__grid-cell">
        <StatCountInput 
          v-model="item.onTheWay"
          unit="шт."
        />
      </div>

      <div class="item__grid-cell">
        <StatCountInput 
          v-model="item.expenditure"
          unit="шт. / день"
        />
        <span>{{ defaultExpenditure }}</span>
      </div>

      <div class="item__grid-cell--last">
        <StatSubButton 
          v-if="!item.sizeRange"
          :text="t('btns.watch')" 
        />
      </div>

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
        <StatSubTableContainer v-if="isActive"> 
          <StatWarehouseSubTable :items="item.sizeRange"/>
        </StatSubTableContainer>
      </Transition>

    </div>

  </div>

</template>

<style scoped lang="postcss">
.item {
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  border: 1px solid var(--color-warehouse-table-item-border);
  border-radius: 4px;
}

.item__grid {
  display: grid;
  grid-template-columns: 385px 141px 184px 168px 132px 144px 150px 84px;
  gap: 16px;
}

.item__grid-cell {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.item__grid-cell--first {
  display: flex;
  gap: 16px;
}

.item__grid-cell--last {
  display: flex;
  align-items: center;
  justify-content: center;
}

.item__grid-img {
  width: 35px;
  height: 46px;
  
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  
    object-fit: cover;
    object-position: center;
  }
}

.item__grid-title {
  display: flex;
  gap: 4px;
  align-items: end;
  color: var(--color-table-title);

  span {
    max-width: 250px;

    font-size: 13px;
    line-height: 18px;
  }
}

.item__grid-article {
  font-size: 12px;
  color: var(--color-article-text);
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

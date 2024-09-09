<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { StatSvgLoader } from "@/shared";

interface IProps {
  text: string
  withSubText: boolean
  withTip: boolean
}

const props = defineProps<IProps>();

const { t } = useI18n();
</script>

<template>

  <div class="default-item">
    <div class="default-item__row">
      <p class="default-item__text">{{ text }}</p>
      <button class="default-item__button">
        <StatSvgLoader name="filter"/>
      </button>
      <button 
        v-if="withTip"
        class="default-item__button"
      >
        <StatSvgLoader name="tip"/>
      </button>
    </div>
    <div 
      class="default-item__row"
      v-if="withSubText"
    >
      <p class="default-item__text">{{ t('warehouse-table.warehouse_enough') }}</p>
      <button class="default-item__button">
        <StatSvgLoader name="filter"/>
      </button>
    </div>
  </div>

</template>

<style scoped lang="postcss">
.default-item {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;

  text-align: left;
}

.default-item__row {
  height: 22px;

  display: flex;
  align-items: center;
  gap: 4px;
}

.default-item__button {
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
}

.default-item__text {
  line-height: 18px;
}
</style>

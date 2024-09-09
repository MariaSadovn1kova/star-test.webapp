<script setup lang="ts">
import { ref, computed } from 'vue';
import { vOnClickOutside } from '@vueuse/components';

import { numberFormatting } from "@/shared";
import { StatInputButton } from './ui';

interface IProps {
  modelValue: number
  unit: string
  forHeader?: boolean
}

const props = defineProps<IProps>();
const emit = defineEmits(['update:modelValue']);

const localModel = ref(props.modelValue);
const isActive = ref(false);

const activateInput = ():void => {
  isActive.value = true;
}

const deactivateInput = ():void => {
  localModel.value = props.modelValue;
  isActive.value = false;
}

const submissInput = ():void => {
  Number(localModel.value) ? emit('update:modelValue', Number(localModel.value)) : emit('update:modelValue', props.modelValue);
  localModel.value = props.modelValue;
  isActive.value = false;
}

const placeholder = computed<string>(() => `${numberFormatting(props.modelValue)} ${props.unit}`);
</script>

<template>
  <div 
    class="stat-count-input"
    :style="forHeader ? 'padding: 0px 4px' : 'padding: 0px'"
    @click="activateInput"
    v-on-click-outside="deactivateInput"
  >

    <div
      v-if="isActive"
      class="stat-count-input__input"
    >
      <input 
        v-model="localModel"
        type="text"
      >

      <div class="stat-count-input__btns">
        <StatInputButton 
          type="confirm"
          iconName="check"
          @click.stop="submissInput"
        />
        <StatInputButton 
          type="refuse"
          iconName="close"
          @click.stop="deactivateInput"
        />
      </div>
    </div>

    <span 
      class="stat-count-input__placeholder"
      v-else
    >
      {{ placeholder }}
    </span>

  </div>
</template>

<style scoped lang="postcss">
.stat-count-input {
  height: 20px;
  padding: 0px 4px;
  border-radius: 4px;
  background: var(--color-count-input-background);

  font-family: 'Lato';
}

.stat-count-input__input {
  display: flex;
  gap: 6px;
  align-items: center;

  input {
    height: 16px;
    max-width: 45px;
    padding: 0;

    border: none;
    outline: none;
    color: var(--color-count-input);
    border-bottom: 1px dotted var(--color-count-input);

    font-family: 'Lato';
    font-size: 14px;
    line-height: 14px;
  }
}

.stat-count-input__btns {
  display: flex;
  gap: 4px;
}

.stat-count-input__placeholder {
  display: inline-block;
  height: 18px;

  color: var(--color-count-input);
  border-bottom: 1px dotted var(--color-count-input);
  cursor: pointer;
}
</style>

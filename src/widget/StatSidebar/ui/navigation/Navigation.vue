<script setup lang="ts">
import NavigationBtn from './NavigationBtn.vue';
import { useI18n } from 'vue-i18n';

interface IRout {
  path: string
  label: string
  iconName: string
}

const { t } = useI18n();

const sidebarRouts: IRout[] = [
  {
    path: '/',
    label: t('pages.my-warehouse'),
    iconName: 'my-warehouse-icon'
  }
]
</script>

<template>

  <div class="navigation">
    <NavigationBtn 
      v-for="rout in sidebarRouts"
      :key="`navigation__${rout.label}`"
      :path="rout.path"
      :iconName="rout.iconName"
      :label="rout.label"
    />
  </div>

</template>

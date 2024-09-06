<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';

import MediaBtn from './MediaBtn.vue';

interface IMediaRout {
  path: string
  iconName: string
}

const { t } = useI18n();

const sidebarMediaRouts: IMediaRout[] = [
  { path: '/', iconName: 'media-tg' },
  { path: '/', iconName: 'media-inst' },
  { path: '/', iconName: 'media-vk' }
]
</script>

<template>

  <div class="media">
   
    <div class="media__btns-wrapper">
      <MediaBtn 
        v-for="mediaRout in sidebarMediaRouts"
        :key="`sidebar-media__${mediaRout.iconName}`"
        :path="mediaRout.path"
        :iconName="mediaRout.iconName"
      />
    </div>

    <RouterLink 
      class="media__partner-program"
      :to="`/`"
    >
      {{ t('sidebar.partner_program') }}
    </RouterLink>

  </div>

</template>

<style scoped lang="postcss">
.media {
  padding: 0 47px 24px 47px;

  display: flex;
  flex-direction: column;
  gap: 16px;
}

.media__btns-wrapper {
  width: 100%;

  display: flex;
  justify-content: space-between;
}

.media__partner-program {
  color: var(--color-sidebar-sub-btn);
  font-size: 13px;
  text-decoration: none;
  
  border-bottom: 1px dotted var(--color-sidebar-sub-btn);
}
</style>
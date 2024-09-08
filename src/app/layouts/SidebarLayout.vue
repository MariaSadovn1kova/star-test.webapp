<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

import { StatSidebar } from '@/widget';
import { StatContainer, StatButton } from "@/shared";

const { t } = useI18n();

const route = useRoute().name as string;
</script>

<template>

  <div class="app-wrapper">
    
    <StatSidebar />
    
    <main class="app-content">
      <div class="page">
        <div class="page__header">
          <h1>{{ t(`pages.${route}`) }}</h1>
          <StatButton 
            :icon-name="`settings`"
            :text=" t(`btns.report_settings`)"
          />
        </div>
        <StatContainer>
          <router-view />
        </StatContainer>
      </div>
    </main>

  </div>

</template>

<style scoped lang="postcss">
.app-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
}

.app-content {
  padding: 24px 39px 24px 41px;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.page {
  width: 1600px;

  display: flex;
  flex-direction: column;
  gap: 24px;
}

@media (max-width: 1919px) {
  .page {
    width: 100%;
  }
}

.page__header {
  height: 40px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

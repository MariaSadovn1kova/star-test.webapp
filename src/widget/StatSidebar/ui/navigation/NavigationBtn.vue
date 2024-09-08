<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { StatSvgLoader } from "@/shared";

interface IProps {
  path: string
  iconName: string
  label: string
}

const props = defineProps<IProps>();
</script>

<template>

  <RouterLink 
    class="navigation-btn"
    :to="path"
  >
    <div class="navigation-btn__img">
      <StatSvgLoader 
        :name="iconName"
      />
    </div>
    <div class="navigation-btn__text">
      <span>{{ label }}</span>
    </div>
  </RouterLink>

</template>

<style scoped lang="postcss">
.navigation-btn {
  width: 100%;
  padding: 13px 22px;

  display: flex;
  gap: 16px;

  color: var(--color-sidebar-font);
  text-decoration: none;
}

.navigation-btn__img {
  width: 24px;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.navigation-btn__text {
  display: flex;
  align-items: end;
}
</style>

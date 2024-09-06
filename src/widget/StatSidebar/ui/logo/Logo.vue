<script setup lang="ts">
import { StatSvgLoader } from "@/shared";
</script>

<template>

  <div class="logo">
    <StatSvgLoader 
      :name="'logo-icon'"
    />
  </div>

</template>

<style scoped lang="postcss">
.logo {
  width: 100%;
  padding: 24px 20px;
}
</style>

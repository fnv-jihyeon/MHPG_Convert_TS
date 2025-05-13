<script setup lang="ts">
import HeaderComp from './HeaderComp.vue'
import NavigationComp from './NavigationComp.vue'
import ContentComp from './ContentComp.vue'
import { useMenuStateStore } from '@/stores/menustate'

const menuState = useMenuStateStore().data
</script>

<template>
  <div class="frame-layout">
    <HeaderComp />
    <div class="main-layout">
      <NavigationComp />
      <ContentComp :key="menuState.pageTitle" />
    </div>
  </div>
</template>

<style scoped>
.frame-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-layout {
  display: flex;
  flex: 1;
  overflow: hidden;
}
</style>
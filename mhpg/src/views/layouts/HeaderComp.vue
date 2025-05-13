<script setup lang="ts">
import headerNavData from '@/assets/data/navdepth/headernav.json'
import { useNavMenu } from '@/composables/useNavMenu'
import { useMenuStateStore } from '@/stores/menustate'

const { filteredMenu, menuState } = useNavMenu(headerNavData)
const menuStore = useMenuStateStore()

function onHeaderMenuClick(index: number) {
  menuState.headerNavSelected = index
  menuStore.ResetTotalSelectedData()
  menuStore.FirstRunHeaderTargetMenu()
}
</script>

<template>
  <div class="header-comp">
    <nav>
      <ul>
        <li
          v-for="(item, index) in filteredMenu"
          :key="item.name"
          :class="{ selected: item.selectedValue }"
          @click="onHeaderMenuClick(index)"
        >
          {{ item.name }}
        </li>
      </ul>
    </nav>
  </div>
</template>
<style scoped>
</style>
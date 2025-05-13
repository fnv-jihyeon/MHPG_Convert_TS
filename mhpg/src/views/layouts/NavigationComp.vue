<script setup lang="ts">
import { useMenuStateStore } from '@/stores/menustate'
import type { NavItem, SecondDepthItem } from '@/assets/data/navdepthmanage'

const menuStore = useMenuStateStore()
const menuState = menuStore.data

const sideMenuList = menuStore.GetSideMenuList()

function onSideMenuClick(index: number, item: NavItem) {
  menuState.sideNavSelected = index
  menuStore.ResetTotalSideSelectState()
  item.selectedValue = true

  if(!item.secondDepth?.length) {
    menuState.sidedetailNavSelected = -1
    menuState.pageTitle = item.name
  }
}

function onSecondMenuClick(subIndex: number, item: SecondDepthItem) {
  menuState.sidedetailNavSelected = subIndex
  menuStore.ResetTotalSideSelectState()
  item.selectedValue = true
  menuState.pageTitle = item.secondName
}
</script>

<template>
  <aside class="navigation-comp">
    <ul>
      <li
        v-for="(item, index) in sideMenuList"
        :key="item.name"
        :class="{ selected: index === menuState.sideNavSelected }"
        @click="onSideMenuClick(index, item)"
      >
        {{ item.name }}

        <ul v-if="item.secondDepth?.length">
          <li
            v-for="(sub, subIndex) in item.secondDepth"
            :key="sub.secondName"
            :class="{ selected: subIndex === menuState.sidedetailNavSelected }"
            @click.stop="onSecondMenuClick(subIndex, sub)"
          >
            {{ sub.secondName }}
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.navigation-comp ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.navigation-comp li {
  padding: 6px 10px;
  cursor: pointer;
  user-select: none;
}

.navigation-comp li.selected {
  background-color: #f0f0f0;
  font-weight: bold;
}
</style>
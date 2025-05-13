import { defineStore } from 'pinia'
import { reactive } from 'vue'
import type { NavItem, SecondDepthItem, NavList } from '@/assets/data/navdepthmanage'

interface MenuState {
  headerNav: NavItem[] | null
  transactionNav: NavItem[] | null
  settlementNav: NavItem[] | null
  contractNav: NavItem[] | null
  systemNav: NavItem[] | null
  headerNavSelected: number
  sideNavSelected: number
  sidedetailNavSelected: number
  pageTitle: string
}

export const useMenuStateStore = defineStore('MenuStateStore', () => {
  const data = reactive<MenuState>({
    headerNav: null,
    transactionNav: null,
    settlementNav: null,
    contractNav: null,
    systemNav: null,
    headerNavSelected: -1,
    sideNavSelected: -1,
    sidedetailNavSelected: -1,
    pageTitle: ''
  })

  function ResetMenuData() {
    data.headerNav = null
    data.transactionNav = null
    data.settlementNav = null
    data.contractNav = null
    data.systemNav = null
    ResetTotalSelectedData()
  }

  function ResetSideNavSelectState(navData: NavItem[]) {
    navData.forEach((item) => {
      item.selectedValue = false
      item.secondDepth?.forEach((second) => {
        second.selectedValue = false
      })
    })
  }

  function ResetHeaderSelectState() {
    data.headerNav?.forEach((item) => {
      item.selectedValue = false
    })
  }

  function ResetTotalSideSelectState() {
    if (data.transactionNav) ResetSideNavSelectState(data.transactionNav)
    if (data.settlementNav) ResetSideNavSelectState(data.settlementNav)
    if (data.contractNav) ResetSideNavSelectState(data.contractNav)
    if (data.systemNav) ResetSideNavSelectState(data.systemNav)
  }

  function ResetTotalSelectedData() {
    if (data.headerNav) ResetHeaderSelectState()
    ResetTotalSideSelectState()
    ResetCurrentSelectData()
  }

  function ResetCurrentSelectData() {
    data.headerNavSelected = -1
    data.sideNavSelected = -1
    data.sidedetailNavSelected = -1
    data.pageTitle = ''
  }

  function FirstRunHeaderTargetMenu() {
    let menu: NavItem | undefined
    switch (data.headerNavSelected) {
      case 0:
        menu = data.transactionNav?.[0]
        break
      case 1:
        menu = data.settlementNav?.[0]
        break
      case 2:
        menu = data.contractNav?.[0]
        break
      case 3:
        menu = data.systemNav?.[0]
        break
    }

    if (!menu) {
      data.pageTitle = ''
      return
    }

    if (menu.secondDepth?.length) {
      data.sidedetailNavSelected = 0
      SetPageTitleToSecondSubMenu(menu.secondDepth[0])
    } else {
      menu.selectedValue = true
      data.pageTitle = menu.name
    }
  }

  function SetPageTitleToSubMenu() {
    let menu: NavItem | undefined
    const selectId = data.sideNavSelected
    if (selectId === -1) return

    switch (data.headerNavSelected) {
      case 0:
        menu = data.transactionNav?.[selectId]
        break
      case 1:
        menu = data.settlementNav?.[selectId]
        break
      case 2:
        menu = data.contractNav?.[selectId]
        break
      case 3:
        menu = data.systemNav?.[selectId]
        break
    }

    if (!menu) {
      data.pageTitle = ''
      return
    }

    data.pageTitle = menu.name
  }

  function SetPageTitleToSecondSubMenu(secondDepth: SecondDepthItem) {
    data.pageTitle = secondDepth.secondName
    secondDepth.selectedValue = true
  }

  function GetSideMenuList(): NavItem[] | null {
    switch (data.headerNavSelected) {
      case 0:
        return data.transactionNav
      case 1:
        return data.settlementNav
      case 2:
        return data.contractNav
      case 3:
        return data.systemNav
      default:
        return null
    }
  }

  return {
    data,
    ResetMenuData,
    ResetSideNavSelectState,
    ResetHeaderSelectState,
    ResetTotalSideSelectState,
    ResetTotalSelectedData,
    ResetCurrentSelectData,
    FirstRunHeaderTargetMenu,
    SetPageTitleToSubMenu,
    SetPageTitleToSecondSubMenu,
    GetSideMenuList
  }
}, {
  persist: true
})

import { computed } from 'vue'
import { useMenuStateStore} from '@/stores/menustate'
import type { NavItem, NavList } from '@/assets/data/navdepthmanage'

export function useNavMenu(rawMenuList: NavList) {
  const menuStateStore = useMenuStateStore()

  const filtered = computed<NavItem[]>(() => {
    return rawMenuList.filter((item) => {
      // 실제 동작해야 할 내용
    })
  })

  //필터된 메뉴를 상태에 반영
  menuStateStore.data.headerNav = filtered.value

  return {
    filteredMenu: filtered,
    menuState: menuStateStore.data
  }
}
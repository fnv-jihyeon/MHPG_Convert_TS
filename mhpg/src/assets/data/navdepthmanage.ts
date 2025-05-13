import HeaderNavData from '@/assets/data/navdepth/headernav.json'
import TransactionNavData from '@/assets/data/navdepth/transactionnav.json'
import SettlementNavData from '@/assets/data/navdepth/settlementnav.json'
import ContractNavData from '@/assets/data/navdepth/contractnav.json'
import SystemNavData from '@/assets/data/navdepth/systemnav.json'

export interface SecondDepthItem {
  secondName: string
  selectedValue: boolean
  url: string
  isShow: boolean
}

export interface NavItem {
  name: string
  selectedValue: boolean
  url?: string
  secondDepth?: SecondDepthItem[]
}

export type NavList = NavItem[]

export function get_header_navlist(): NavList {
  return structuredClone(HeaderNavData)
}

export function get_transaction_navlist(): NavList {
  return structuredClone(TransactionNavData)
}

export function get_SettlementNavData_navlist(): NavList {
  return structuredClone(SettlementNavData)
}

export function get_ContractNavData_navlist(): NavList {
  return structuredClone(ContractNavData)
}

export function get_SystemNavData_navlist(): NavList {
  return structuredClone(SystemNavData)
}
import { useRouter } from 'vue-router'

export function useCommon() {
  const router = useRouter()

  function goBack(): void {
    router.go(-1)
  }

  function goHome(): void {
    router.push({ path: '/' })
  }

  function scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function checkArrayEmpty(arr: unknown[]): boolean {
    return !(Array.isArray(arr) && arr.length === 0)
  }

  function formatData(date: string | Date, locale: string = 'ko-KR'): string {
    const d = new Date(date)
    return isNaN(d.getTime()) ? '' : d.toLocaleDateString(locale)
  }

  return {
    goBack,
    goHome,
    checkArrayEmpty,
    formatData,
    scrollToTop
  }
}
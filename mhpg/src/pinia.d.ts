import 'pinia'

declare module 'pinia' {
  export interface DefineStoreOptionBase<S, Strore> {
    persist?: boolean
  }
}
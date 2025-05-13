import type { App } from 'vue'

import LoginDefaultFrame from '@/components/LoginDefaultFrame.vue'
import PaginationComp from '@/components/PaginationComp.vue'
import AccordionFrameComp from '@/components/AccordionFrameComp.vue'

import ButtonRadioComp from '@/components/input/ButtonRadioComp.vue'
import CalendarPeriodInputComp from '@/components/input/CalendarPeriodInputComp.vue'
import CalendarUpperInputComp from '@/components/input/CalendarUpperInputComp.vue'
import NormalCheckboxComp from '@/components/input/NormalCheckboxComp.vue'
import NormalRadioComp from '@/components/input/NormalRadioComp.vue'
import NormalUpperInputComp from '@/components/input/NormalUpperInputComp.vue'
import PasswordInputComp from '@/components/input/PasswordInputComp.vue'
import ToggleButtonComp from '@/components/input/ToggleButtonComp.vue'
import SelectBoxComp from '@/components/input/SelectBoxComp.vue'

import ModalFrameComp from '@/components/modal/ModalFrameComp.vue'
import AlertModalFrameComp from '@/components/modal/AlertModalFrameComp.vue'

import VerticalTableComp from '@/components/table/VerticalTableComp.vue'
import HorizonTableComp from '@/components/table/HorizonTableComp.vue'

export default {
  install(app: App) {
    app.component('LoginDefaultFrame', LoginDefaultFrame)
    app.component('PaginationComp', PaginationComp)
    app.component('AccordionFrameComp', AccordionFrameComp)

    app.component('ButtonRadioComp', ButtonRadioComp)
    app.component('CalendarPeriodInputComp', CalendarPeriodInputComp)
    app.component('CalendarUpperInputComp', CalendarUpperInputComp)
    app.component('NormalCheckboxComp', NormalCheckboxComp)
    app.component('NormalRadioComp', NormalRadioComp)
    app.component('NormalUpperInputComp', NormalUpperInputComp)
    app.component('PasswordInputComp', PasswordInputComp)
    app.component('ToggleButtonComp', ToggleButtonComp)
    app.component('SelectBoxComp', SelectBoxComp)

    app.component('ModalFrameComp', ModalFrameComp)
    app.component('AlertModalFrameComp', AlertModalFrameComp)

    app.component('VerticalTableComp', VerticalTableComp)
    app.component('HorizonTableComp', HorizonTableComp)
  }
}

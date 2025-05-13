import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/main/LoginComp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      name: 'Login',
      components: { default: Login },
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/FrameComp.vue'),
      children: [
        {
          path: '',
          name: 'mainTotal',
          components: {
            mainContentViews: () => import('@/views/content/main/MainIndexComp.vue'),
          },
        },
        {
          path: '/transaction',
          name: 'transaction',
          component: { render: () => null }, // Nested children only
          children: [
            'currentaction','total','card','bank','vrbank','refundag','escrowpay','splitpay','api','recurringpay','authkey','purchase','cashreceipt','risk'
          ].map(name => ({
            path: name,
            name,
            components: {
              mainContentViews: () => import(`@/views/content/transaction/Transaction${capitalize(name)}.vue`),
            },
          })),
        },
        {
          path: '/settlement',
          name: 'settlement',
          component: { render: () => null },
          children: [
            'search','adjustment','categorysearch','taxinvoice','paymentag','refundag','financialstatus','requestpayment','client','billingmanage','balanceadjustment','preferentialfee','paymentgatewaydoc'
          ].map(name => ({
            path: name,
            name,
            components: {
              mainContentViews: () => import(`@/views/content/settlement/Settlement${capitalize(name)}.vue`),
            },
          })),
        },
        {
          path: '/contract',
          name: 'contract',
          component: { render: () => null },
          children: [
            'affiliater','entrepreneur','customerinfo','accountmanage','originatingsearch','originatingadd','agencymanage','adminmanage'
          ].map(name => ({
            path: name,
            name,
            components: {
              mainContentViews: () => import(`@/views/content/contract/Contract${capitalize(name)}.vue`),
            },
          })),
        },
        {
          path: '/system',
          name: 'system',
          component: { render: () => null },
          children: [
            'notice','faq','direct','resource','bomg'
          ].map(name => ({
            path: name,
            name,
            components: {
              mainContentViews: () => import(`@/views/content/system/System${capitalize(name)}.vue`),
            },
          })),
        },
      ],
    },
  ],
})

function capitalize(str: string): string {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default router
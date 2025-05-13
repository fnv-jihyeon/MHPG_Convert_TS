export const FinancialCompany = {
  ALL: { code: 0, value: 'All', str: '전체' },
  BC: { code: 1, value: 'BC', str: '비씨' },
  KB: { code: 2, value: 'KB', str: '국민' },
  SAMSUNG: { code: 4, value: 'Samsung', str: '삼성' },
  SHINHAN: { code: 6, value: 'Shinhan', str: '신한' },
  LOTTE: { code: 8, value: 'Lotte', str: '롯데' },
  NH: { code: 12, value: 'NH', str: '농협' },
  WOORI: { code: 15, value: 'Woori', str: '우리' },
  VISA: { code: 25, value: 'Visa', str: '해외비자' },
  MASTER: { code: 26, value: 'Master', str: '해외마스터' },
  DINERS: { code: 27, value: 'Diners', str: '해외다이너스' },
  AMX: { code: 28, value: 'AMX', str: '해외AMX' },
  JCB: { code: 29, value: 'JCB', str: '해외JCB' },
  UNIONPAY: { code: 35, value: 'UnionPay', str: '중국유니온페이' },
  DISCOVER: { code: 36, value: 'Discover', str: '해외디스커버리' }
} as const

export type FinancialCompanyKey = keyof typeof FinancialCompany
export type FinancialCompanyCode = (typeof FinancialCompany)[FinancialCompanyKey]['code']

export const Paymentmethod = {
  ALL: { value: 'all', str: '전체' },
  CARD: { value: 'card', str: '신용카드' },
  BANKTRANSFER: { value: 'bank', str: '계좌이체' },
  VIRTUALACCOUNT: { value: 'virtual', str: '가상계좌' },
  SIMPLEPAY: { value: 'simple', str: '간편결제' }
} as const

export type PaymentmethodKey = keyof typeof Paymentmethod
export type PaymentmethodValue = (typeof Paymentmethod)[PaymentmethodKey]['value']

export const Inquiry = {
  DAILY: { value: 'day', str: '일별' },
  MONTHLY: { value: 'month', str: '월별' },
  QUARTERLY: { value: 'quarter', str: '분기별' }
} as const

export type InquiryKey = keyof typeof Inquiry
export type InquiryValue = (typeof Inquiry)[InquiryKey]['value']

export enum Role {
  ERROR = 0,
  BOADMIN = 1,
  BOOPERATOR = 2,
  MIDADMIN = 3,
  GIDADMIN = 4,
  AIDADMIN = 5
}
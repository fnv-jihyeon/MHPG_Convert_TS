import axios from 'axios'
import { useCookies } from 'vue3-cookies'

export const api_host = import.meta.env.VITE_API_HOST

export const PATHS = {
 AGENCY: 'agency',
  AGENCY_CEO: 'agencyceo',
  CDD: 'cddinfo',
  FAQ: 'faq',
  FAQ_CATEGORY: 'faqcategory',
  GROUP: 'group',
  INQUIRY: 'inquiry',
  BUSINESS: 'business',
  BUSINESS_CEO: 'businessceo',
  SME_GRADE_DATA: 'smegradedata',
  MERCHANT: 'merchant',
  MERCHANT_LIMIT: 'merchantlimit',
  MERCHANT_LIMIT_CHANGE: 'merchantlimitchange',
  NONBIZDAY: 'nonbizday',
  NOTICE: 'notice',
  PAY_DATA: 'pg/pay/data',
  PAYMENT: 'payment',
  PAYMENT_PROVIDER: 'paymentprovider',
  PAYMENT_PROVIDER_CEO: 'paymentproviderceo',
  PG: 'pg',
  PG_CEO: 'pgceo',
  PP_LIMIT_CHANGE: 'pplimitchange',
  PPMERCHANT: 'ppmerchant',
  REPLY: 'reply',
  RESOURCE: 'resource',
  RESOURCE_CATEGORY: 'resourcecategory',
  SETTLEMENT: 'settlement',
  USER: 'user',
  USER_PERMISSION: 'userpermission',
  USER_CHECK_USERNAME: 'user/check',
  DISBURSEMENT_TRANSACTION: 'disbursementtransaction',
  SAVED_PARTNER_ACCOUNT: 'savedpartneraccount',
  DEPOSIT: 'deposit',
  DEPOSIT_TRANSACTIONS_HISTORY: 'deposittransactionshistory',
} as const

export const authCode: Record<number, string> ={
  1000: '로그인 성공',
  1001: '아이디/비밀번호 오류',
  1002: '계정 잠김',
  1003: '계정 비활성화',
  1004: 'OTP 오류',
  1005: 'OTP 오류 최대 횟수 초과',
  2001: '비밀번호 변경 입력값 오류',
  2002: '비밀번호 검증 오류',
  999999: '알 수 없는 오류',
}

function getUrl(path: string, id?: number | string, qp?: Record<string, string>): string {
  let url = `${api_host}/${path}/`
  if (id != null) url += `${id}/`
  if (qp) {
    const params = new URLSearchParams(qp)
    url += `?${params.toString()}`
  }
  return url
}

function getConfig() {
  const { cookies } = useCookies()
  return {
    headers: {
      'X-CSRFTOKEN': cookies.get('csrftoken'),
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  }
}

export async function get<T>(url: string) {
  return axios.get<T>(url, { withCredentials: true })
}

export async function post<T>(url: string, data: any) {
  return axios.post<T>(url, data, getConfig())
}

export async function patch<T>(url: string, data: any) {
  return axios.patch<T>(url, data, getConfig())
}

export async function del<T>(url: string) {
  return axios.delete<T>(url, getConfig())
}

export async function ping() {
  return get(`${api_host}/ping/`)
}

export async function sessionUser() {
  return get(`${api_host}/session/user/`)
}

export async function sessionClear() {
  return get(`${api_host}/session/clear/`)
}

export async function sessionRefresh() {
  return post(`${api_host}/session/refresh/`, {})
}

export async function sessionExpiry() {
  return get(`${api_host}/session/expiry/`)
}

export async function login(username: string, password: string) {
  return post(`${api_host}/login/`, { username, password })
}

export async function loginOtpCheck(otpCode: string) {
  return post(`${api_host}/login/otp/check/`, { otp_code: otpCode })
}

export async function logout() {
  return post(`${api_host}/logout/`, {})
}

export async function idFind(data: any) {
  return post(`${api_host}/id/find/`, data)
}

export async function passwordFind(id: string, birth: string, bizno: string, accountNumber: string) {
  return post(`${api_host}/password/find/`, { id, birth, bizno, account_number: accountNumber })
}

export async function passwordChange(currentPassword: string, newPassword: string, confirmPassword: string) {
  return post(`${api_host}/password/change/`, {
    current_password: currentPassword,
    new_password: newPassword,
    confirm_password: confirmPassword,
  })
}

export async function getDataList(path: string, qp?: Record<string, string>) {
  return get(getUrl(path, undefined, qp))
}

export async function createData(path: string, data: any) {
  return post(getUrl(path), data)
}

export async function getData(path: string, id: number | string, qp?: Record<string, string>) {
  return get(getUrl(path, id, qp))
}

export async function patchData(path: string, id: number | string, data: any) {
  return patch(getUrl(path, id), data)
}

export async function deleteData(path: string, id: number | string) {
  return del(getUrl(path, id))
}

export async function checkUsername(username: string) {
  return post(getUrl(PATHS.USER_CHECK_USERNAME), { username })
}

export async function getPayData() {
  return post(getUrl(PATHS.PAY_DATA), {})
}

export async function registerSmeGradeData(formData: FormData) {
  const url = `${api_host}/smegradedata/register/`
  const { cookies } = useCookies()
  const config = {
    headers: {
      'X-CSRFTOKEN': cookies.get('csrftoken'),
      'Content-Type': 'multipart/form-data',
    },
    withCredentials: true,
  }
  return axios.post(url, formData, config)
}

export async function cancelPayment(data: any) {
  return post(`${api_host}/pg/cancel/`, data)
}

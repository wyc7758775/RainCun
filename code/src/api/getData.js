import { upInitUrl } from '@/config/axios'

export const login = data => upInitUrl('/user/login', data, 'urlencoded')

export const register = data => upInitUrl('/user/register', data, 'urlencoded')

export const addLeaveMsg = data => upInitUrl('/leaveWord/addLeaveMsg', data, 'urlencoded')

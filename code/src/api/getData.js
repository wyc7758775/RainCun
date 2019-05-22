import { upInitUrl } from '@/config/axios'

export const login = data => upInitUrl('/user/login', data, 'urlencoded')

export const register = data => upInitUrl('/user/register', data, 'urlencoded')

export const addLeaveMsg = data => upInitUrl('/leaveWord/addLeaveMsg', data, 'urlencoded')

// 文章 1.添加本子 2.查看本子列表By 3.添加文章 4.获取书本中对应的文章
export const addBook = data => upInitUrl('/arTitle/addBook', data, 'urlencoded')

export const getBookList = data => upInitUrl('/arTitle/getBookList', data, 'urlencoded')


export const addContent = data => upInitUrl('/arTitle/addContent', data, 'urlencoded')
export const getConentList = data => upInitUrl('/arTitle/getContentList', data, 'urlencoded')
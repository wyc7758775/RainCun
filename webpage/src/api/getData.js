import { upInitUrl } from '@/config/axios'

export const login = data => upInitUrl('/user/login', data, 'urlencoded')

export const register = data => upInitUrl('/user/register', data, 'urlencoded')

export const addLeaveMsg = data => upInitUrl('/leaveWord/addLeaveMsg', data, 'urlencoded')

// 文章 1.添加本子 2.查看本子列表By 3.添加文章 4.获取书本中对应的文章 5.发布文章 6.更新文章
export const addBook = data => upInitUrl('/arTitle/addBook', data, 'urlencoded')

export const getBookList = data => upInitUrl('/arTitle/getBookList', data, 'urlencoded')


export const addContent = data => upInitUrl('/arTitle/addContent', data, 'urlencoded')
// 获取文章列表
export const getConentList = data => upInitUrl('/arTitle/getContentList', data, 'urlencoded')
// 发布文章
export const releaseContent = data => upInitUrl('/arTitle/releaseContent', data, 'urlencoded')
// 更新文章
export const updateContent = data => upInitUrl('/arTitle/updateContent', data, 'urlencoded')
// 删除文章
export const delectContent = data => upInitUrl('/arTitle/delectContentById', data, 'urlencoded')

// 关于我
export const aboutMe = {
  addAboutMe: data => upInitUrl('/about/addAboutMe', data, 'urlencoded'),
  getAboutMe: data => upInitUrl('/about/getAboutMe', data, 'urlencoded')
}
export const getUserId = (state, data) => {
  state.userId = data
}
// bookMenu
export const getBookMenu = (state, data) => {
  state.bookMenu = data
}
// currentBookId
export const ModCurrentBookId = (state, data) => {
  state.currentBookId = data
}
// currentContent
export const showCurrentContent = (state, data) => {
  state.currentContent =  data
}
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
  state.currentContent = data
}
// currentContentId
export const modCurrentContentID = (state, data) => {
  state.currentContentId = data
}
// dialogShow
export const modDialogShow = (state, data) => {
  state.dialogShow = data
}
// inpuContent
export const getInpuContent = (state, data) => {
  state.inpuContent = data
}
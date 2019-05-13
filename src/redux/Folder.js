const SET_FOLDER_NAME = 'SET_FOLDER_NAME'
const SHOW_NEW_FOLDER_MODAL = 'SHOW_NEW_FOLDER_MODAL'
const SHOW_FILE_UPLOAD_MODAL = 'SHOW_FILE_UPLOAD_MODAL'

export const setFolderName = (foldername) => ({
    type : SET_FOLDER_NAME,
    foldername,
})
export const showNewFolderModal = (isshow) => ({
    type : SHOW_NEW_FOLDER_MODAL,
    isshow,
})
export const showFileUploadModal = (isshow) => ({
    type : SHOW_FILE_UPLOAD_MODAL,
    isshow,
})
export const initialState = {
    FolderList : [
        {
            foldername : '',
        },
    ],
    modalShow : false,
    fileShow : false,

}

const folder = (state=initialState, action) => {
    switch(action.type) {
        case SET_FOLDER_NAME :
            return {
                ...state
            }
        case SHOW_NEW_FOLDER_MODAL:
            return {
                ...state,
                modalShow : action.isshow,
            }
        case SHOW_FILE_UPLOAD_MODAL:
            return {
                ...state,
                fileShow : action.isshow,
            }
        default:
            return state
    }
}
export default folder
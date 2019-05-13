const SET_FOLDER_NAME = 'SET_FOLDER_NAME'
const SHOW_NEW_FOLDER_MODAL = 'SHOW_NEW_FOLDER_MODAL'

export const setFolderName = (foldername) => ({
    type : SET_FOLDER_NAME,
    foldername,
})
export const showNewFolderModal = (isshow) => ({
    type : SHOW_NEW_FOLDER_MODAL,
    isshow,
})
export const initialState = {
    FolderList : [
        {
            foldername : '',
        },
    ],
    modalShow : false,

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

        default:
            return state
    }
}
export default folder
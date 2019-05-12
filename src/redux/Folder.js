const SET_FOLDER_NAME = 'SET_FOLDER_NAME'

export const setFolderName = (foldername) => ({
    type : SET_FOLDER_NAME,
    foldername,
})

export const initialState = {
    FolderList : [
        {
            foldername : '',
        },
    ],

}

const folder = (state=initialState, action) => {
    switch(action.type) {
        case SET_FOLDER_NAME :
            return {
                ...state
            }

        default:
            return state
    }
}
export default folder
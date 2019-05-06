const CHANGE_INPUT = 'CHANGE_INPUT'
const INITIALIZE_FORM = 'INITIALIZE_FORM'

export const changeInput = (email, username, password) => ({
    type : CHANGE_INPUT,
    email,
    username,
    password,
})

export const initialState = {
    userList : [
        {
            email :'',
            usename : '',
            password : '',
        }
    ],

    curUser : {
        email : '',
        username : '',
        password : '',
    },

}

const user = (state=initialState, action) => {
    switch(action.type) {
        case CHANGE_INPUT :
            return {
                ...state

            }

        case INITIALIZE_FORM:
            return {
                ...state
            }

        default:
            return state
    }
}
export default user
const initialState = {
    data: null,
    errorMessage:'',
    isLoading: false,
    isError: false
}

const loginReducer = (state=initialState, action) => {
    if(action.type === 'AUTH_LOGIN_PENDING'){
        return{
            ...state,
            isLoading: true,
        } 
    } else if(action.type === 'AUTH_LOGIN_SUCCESS'){
        return{
            ...state,
            data: action.payload,
            isLoading:false,
            errorMessage:'',
            isError:false
        }
    } else if(action.type === 'AUTH_LOGIN_FAILED') {
        return{
            ...state,
            data:null,
            errorMessage:action.payload,
            isLoading:false,
            isError:true
        }
    } else if(action.type === 'LOGOUT_SUCCESS') {
        return{
            ...state,
            data:null,
            errorMessage:'',
            isLoading:false,
            isError:false
        }
    } else {
        return state
    }
}

export default loginReducer
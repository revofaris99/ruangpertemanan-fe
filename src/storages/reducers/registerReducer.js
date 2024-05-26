const initialState = {
    data: null,
    errorMessage:'',
    isLoading: false,
    isError: false
}

const registerReducer = (state=initialState, action) => {
    if(action.type === 'USER_REGISTER_PENDING'){
        return{
            ...state,
            isLoading: true,
        } 
    } else if(action.type === 'USER_REGISTER_SUCCESS'){
        return{
            ...state,
            data: action.payload,
            errorMessage:'',
            isLoading:false,
            isError:false
        }
    } else if(action.type === 'USER_REGISTER_FAILED') {
        return{
            ...state,
            data:null,
            errorMessage:action.payload,
            isLoading:false,
            isError:true
        }
    } else if(action.type === 'USER_REGISTER_CLEAN') {
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

export default registerReducer
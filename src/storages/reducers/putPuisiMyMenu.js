const initialState = {
    data: null,
    errorMessage:'',
    isLoading: false,
    isError:false
}

const putPuisiMyMenu = (state=initialState,action) => {
    if(action.type === 'UPDATE_MY_PUISI_PENDING'){
        return{
            ...state,
            isLoading: true,
        }
    } else if(action.type === 'UPDATE_MY_PUISI__SUCCESS'){
        return{
            ...state,
            data: action.payload,
            errorMessage:'',
            isLoading:false,
            isError:false
        }
    } else if(action.type === 'UPDATE_MY_PUISI__FAILED'){
        return{
            ...state,
            data:null,
            errorMessage:action.payload,
            isLoading:false,
            isError:true
        }
    } else if(action.type === 'UPDATE_MENU_CLEAN'){
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

export default putPuisiMyMenu
const initialState = {
    data: null,
    errorMessage:'',
    isLoading: false,
    isError:false
}

const postPuisi = (state=initialState,action) => {
    if(action.type === 'POST_PUISI_PENDING'){
        return{
            ...state,
            isLoading: true,
        }
    } else if(action.type === 'POST_PUISI_SUCCESS'){
        return{
            ...state,
            data: action.payload,
            isLoading:false,
            errorMessage:'',
            isError:false
        }
    } else if(action.type === 'POST_PUISI_FAILED'){
        return{
            ...state,
            data:null,
            errorMessage:action.payload,
            isLoading:false,
            isError:true
        }
    } else if(action.type === 'DETAIL_PUISI_RESET'){
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

export default postPuisi
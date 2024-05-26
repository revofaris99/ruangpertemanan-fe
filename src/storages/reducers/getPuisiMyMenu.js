  const initialState = {
    data: null,
    errorMessage: null,
    isLoading: false,
  };
  
  const getPuisiMyMenu = (state = initialState, action) => {
    if (action.type === "GET_MY_PUISI_PENDING") {
      return {
        ...state,
        isLoading: true,
      };
    } else if (action.type === "GET_MY_PUISI_SUCCESS") {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    } else if (action.type === "GET_MY_PUISI_FAILED") {
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
      };
    } else {
      return state;
      };
  };
  
  export default getPuisiMyMenu;
  
  
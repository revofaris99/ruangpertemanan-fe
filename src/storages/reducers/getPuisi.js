const initialState = {
  data: null,
  errorMessage: null,
  isLoading: false,
  isError: false,
};

const getPuisi = (state = initialState, action) => {
  if (action.type === "GET_PUISI_PANDDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "GET_PUISI_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      errorMessage: "",
      isError: false,
    };
  } else if (action.type === "GET_PUISI_FAILED") {
    return {
      ...state,
      errorMessage: action.payload,
      isLoading: false,
      isError: true,
    };
  } else {
    return state;
  }
};

export default getPuisi;

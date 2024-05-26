const initialState = {
  data: null,
  errorMessage: null,
  isLoading: false,
};

const profile = (state = initialState, action) => {
  if (action.type === "USER_PROFILE_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "USER_PROFILE_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  } else if (action.type === "USER_PROFILE_FAILED") {
    return {
      ...state,
      errorMessage: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default profile;

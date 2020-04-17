export const initialState = {
  smurf: [],
  isFetching: false,
  error: "",
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "START":
      return { ...state, error: "", isFetching: true };
    case "GOT_DATA_YES":
      return {
        ...state,
        isFetching: false,
        guy: action.payload,
        error: "",
      };

    case "ERROR":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case "GOT_IT_START":
      return {
        ...state,
        isFetching: true,
      };
    case "GOT_POST_YES":
      return {
        ...state,
        smurf: action.payload,
        isFetching: false,
      };
    case "POST_ERROR":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

import { GET_QUOTES } from "../actions/types";

const initialState = {
  quotes: [],
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_QUOTES:
      return {
        ...state,
        quotes: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

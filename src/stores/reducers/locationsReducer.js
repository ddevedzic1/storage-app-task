import {
  FETCH_LOCATIONS_START,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_FAILURE,
} from "../common/commonLocationsTypes";

const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_LOCATIONS_SUCCESS:
      return {
        isLoading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_LOCATIONS_FAILURE:
      return {
        isLoading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default locationsReducer;

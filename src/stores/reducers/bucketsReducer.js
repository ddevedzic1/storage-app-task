import {
  FETCH_BUCKETS_START,
  FETCH_BUCKETS_SUCCESS,
  FETCH_BUCKETS_FAILURE,
} from "../common/commonBucketsTypes";

const initialState = {
  isLoadingFetchingData: false,
  data: [],
  errorFetchingData: "",
  numberOfBuckets: 0,
};

const bucketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BUCKETS_START:
      return {
        ...state,
        errorFetchingData: "",
        isLoadingFetchingData: true,
      };
    case FETCH_BUCKETS_SUCCESS:
      return {
        ...state,
        isLoadingFetchingData: false,
        data: action.payload,
        errorFetchingData: "",
        numberOfBuckets: action.payload.length,
      };
    case FETCH_BUCKETS_FAILURE:
      return {
        ...state,
        isLoadingFetchingData: false,
        data: [],
        errorFetchingData: action.payload,
        numberOfBuckets: 0,
      };
    default:
      return state;
  }
};

export default bucketsReducer;

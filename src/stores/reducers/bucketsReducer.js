import {
  FETCH_BUCKETS_START,
  FETCH_BUCKETS_SUCCESS,
  FETCH_BUCKETS_FAILURE,
  CREATE_BUCKET_START,
  CREATE_BUCKET_SUCCESS,
  CREATE_BUCKET_FAILURE,
} from "../common/commonBucketsTypes";

const initialState = {
  isLoadingFetchingData: false,
  data: [],
  errorFetchingData: "",
  numberOfBuckets: 0,
  isLoadingNewBucket: false,
  errorNewBucket: "",
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
    case CREATE_BUCKET_START:
      return {
        ...state,
        errorNewBucket: "",
        isLoadingNewBucket: true,
      };
    case CREATE_BUCKET_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        isLoadingNewBucket: false,
        errorNewBucket: "",
        numberOfBuckets: ++state.numberOfBuckets,
      };
    case CREATE_BUCKET_FAILURE:
      return {
        ...state,
        isLoadingNewBucket: false,
        errorNewBucket: action.payload,
      };
    default:
      return state;
  }
};

export default bucketsReducer;

import {
  FETCH_BUCKETS_START,
  FETCH_BUCKETS_SUCCESS,
  FETCH_BUCKETS_FAILURE,
  CREATE_BUCKET_START,
  CREATE_BUCKET_SUCCESS,
  CREATE_BUCKET_FAILURE,
  OPEN_NEW_BUCKET_FORM,
  CLOSE_NEW_BUCKET_FORM,
  SET_SELECTED_BUCKET,
  OPEN_CLOSE_MODAL_BUCKET,
  DELETE_BUCKET_START,
  DELETE_BUCKET_SUCCESS,
  DELETE_BUCKET_FAILURE,
} from "../common/commonBucketsTypes";

const initialState = {
  isLoadingFetchingData: false,
  data: [],
  errorFetchingData: "",
  numberOfBuckets: 0,
  isLoadingNewBucket: false,
  errorNewBucket: "",
  isNewBucketFormOpen: false,
  selectedBucket: { id: "", name: "", location: { id: "", name: "" } },
  isModalOpen: false,
  isLoadingDeleteBucket: false,
  errorDeleteBucket: "",
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
    case OPEN_NEW_BUCKET_FORM:
      return {
        ...state,
        isNewBucketFormOpen: true,
      };
    case CLOSE_NEW_BUCKET_FORM:
      return {
        ...state,
        isNewBucketFormOpen: false,
      };
    case SET_SELECTED_BUCKET:
      return {
        ...state,
        selectedBucket:
          state.data.find((bucket) => bucket.id === action.payload) ||
          initialState.selectedBucket,
      };
    case OPEN_CLOSE_MODAL_BUCKET:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    case DELETE_BUCKET_START:
      return {
        ...state,
        isLoadingDeleteBucket: true,
        errorDeleteBucket: "",
      };
    case DELETE_BUCKET_SUCCESS:
      return {
        ...state,
        isLoadingDeleteBucket: false,
        errorDeleteBucket: "",
        data: state.data.filter((bucket) => {
          return bucket.id !== action.payload;
        }),
      };
    case DELETE_BUCKET_FAILURE:
      return {
        ...state,
        isLoadingDeleteBucket: false,
        errorDeleteBucket: action.payload,
      };
    default:
      return state;
  }
};

export default bucketsReducer;

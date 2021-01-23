import {
  FETCH_FILES_START,
  FETCH_FILES_SUCCESS,
  FETCH_FILES_FAILURE,
} from "../common/commonFilesTypes";

const initialState = {
  isLoadingFetchingData: false,
  data: [],
  errorFetchingData: "",
  numberOfFiles: 0,
  storageSize: 0,
};

const filesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILES_START:
      return {
        ...state,
        errorFetchingData: "",
        isLoadingFetchingData: true,
      };
    case FETCH_FILES_SUCCESS:
      return {
        ...state,
        isLoadingFetchingData: false,
        data: action.payload,
        errorFetchingData: "",
        numberOfFiles: action.payload.length,
        storageSize: action.payload.reduce(
          (sum, currentElement) => sum + (currentElement.size || 0),
          0
        ),
      };
    case FETCH_FILES_FAILURE:
      return {
        ...state,
        isLoadingFetchingData: false,
        data: [],
        errorFetchingData: action.payload,
        numberOfFiles: 0,
        storageSize: 0,
      };
    default:
      return state;
  }
};

export default filesReducer;

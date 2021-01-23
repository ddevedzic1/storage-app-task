import {
  FETCH_FILES_START,
  FETCH_FILES_SUCCESS,
  FETCH_FILES_FAILURE,
  ADD_FILE_START,
  ADD_FILE_SUCCESS,
  ADD_FILE_FAILURE,
  SET_SELECTED_FILE,
  OPEN_CLOSE_MODAL_FILE,
  DELETE_FILE_START,
  DELETE_FILE_SUCCESS,
  DELETE_FILE_FAILURE,
} from "../common/commonFilesTypes";

const initialState = {
  isLoadingFetchingData: false,
  data: [],
  errorFetchingData: "",
  numberOfFiles: 0,
  storageSize: 0,
  isLoadingAddFile: false,
  errorAddFile: "",
  selectedFile: "",
  isModalOpen: false,
  isLoadingDeleteFile: false,
  errorDeleteFile: "",
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
    case ADD_FILE_START:
      return {
        ...state,
        errorAddFile: "",
        isLoadingAddFile: true,
      };
    case ADD_FILE_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        isLoadingAddFile: false,
        errorAddFile: "",
        numberOfFiles: ++state.numberOfFiles,
        storageSize: state.storageSize + action.payload.size,
      };
    case ADD_FILE_FAILURE:
      return {
        ...state,
        isLoadingAddFile: false,
        errorAddFile: action.payload,
      };
    case SET_SELECTED_FILE:
      return {
        ...state,
        selectedFile: action.payload,
      };
    case OPEN_CLOSE_MODAL_FILE:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    case DELETE_FILE_START:
      return {
        ...state,
        isLoadingDeleteFile: true,
        errorDeleteFile: "",
      };
    case DELETE_FILE_SUCCESS:
      return {
        ...state,
        isLoadingDeleteFile: false,
        errorDeleteFile: "",
        numberOfFiles: --state.numberOfFiles,
        data: state.data.filter((file) => {
          return file.name !== action.payload;
        }),
        storageSize:
          state.storageSize -
          state.data.filter((file) => {
            return file.name === action.payload;
          })[0].size,
      };
    case DELETE_FILE_FAILURE:
      return {
        ...state,
        isLoadingDeleteFile: false,
        errorDeleteFile: action.payload,
      };
    default:
      return state;
  }
};

export default filesReducer;

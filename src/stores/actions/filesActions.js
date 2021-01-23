import axios from "axios";
import {
  FETCH_FILES_START,
  FETCH_FILES_SUCCESS,
  FETCH_FILES_FAILURE,
  ADD_FILE_START,
  ADD_FILE_SUCCESS,
  ADD_FILE_FAILURE,
} from "../common/commonFilesTypes";
import {
  BASE_URL,
  HEADERS,
  UPLOAD_FILE_HEADERS,
} from "../common/commonApiConfig";

export const fetchFilesStart = () => {
  return {
    type: FETCH_FILES_START,
  };
};

export const fetchFilesSuccess = (files) => {
  return {
    type: FETCH_FILES_SUCCESS,
    payload: files,
  };
};

export const fetchFilesFailure = (error) => {
  return {
    type: FETCH_FILES_FAILURE,
    payload: error,
  };
};

export const addFileStart = () => {
  return {
    type: ADD_FILE_START,
  };
};

export const addFileSuccess = (file) => {
  return {
    type: ADD_FILE_SUCCESS,
    payload: file,
  };
};

export const addFileFailure = (error) => {
  return {
    type: ADD_FILE_FAILURE,
    payload: error,
  };
};

export const fetchFiles = (bucketId) => {
  return (dispatch) => {
    dispatch(fetchFilesStart());
    axios
      .get(`${BASE_URL}/buckets/${bucketId}/objects`, HEADERS)
      .then((response) => {
        const files = response.data.objects;
        dispatch(fetchFilesSuccess(files));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchFilesFailure(errorMessage));
      });
  };
};

export const addFile = (file, bucketId) => {
  return (dispatch) => {
    dispatch(addFileStart());
    let formData = new FormData();
    formData.append("file", file);

    /*for (let pair of formData.entries()) {
      console.log(pair[0]);
      console.log(pair[1]);
    }*/

    axios
      .post(
        `${BASE_URL}/buckets/${bucketId}/objects`,
        formData,
        UPLOAD_FILE_HEADERS
      )
      .then((response) => {
        const newFileData = response.data;
        dispatch(addFileSuccess(newFileData));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(addFileFailure(errorMessage));
      });
  };
};

import axios from "axios";
import {
  FETCH_FILES_START,
  FETCH_FILES_SUCCESS,
  FETCH_FILES_FAILURE,
} from "../common/commonFilesTypes";
import { BASE_URL, HEADERS } from "../common/commonApiConfig";

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

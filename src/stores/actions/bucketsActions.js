import axios from "axios";
import {
  FETCH_BUCKETS_START,
  FETCH_BUCKETS_SUCCESS,
  FETCH_BUCKETS_FAILURE,
} from "../common/commonBucketsTypes";
import { BASE_URL, HEADERS } from "../common/commonApiConfig";

export const fetchBucketsStart = () => {
  return {
    type: FETCH_BUCKETS_START,
  };
};

export const fetchBucketsSuccess = (buckets) => {
  return {
    type: FETCH_BUCKETS_SUCCESS,
    payload: buckets,
  };
};

export const fetchBucketsFailure = (error) => {
  return {
    type: FETCH_BUCKETS_FAILURE,
    payload: error,
  };
};

export const fetchBuckets = () => {
  return (dispatch) => {
    dispatch(fetchBucketsStart());
    axios
      .get(`${BASE_URL}/buckets`, HEADERS)
      .then((response) => {
        const buckets = response.data.buckets;
        dispatch(fetchBucketsSuccess(buckets));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchBucketsFailure(errorMessage));
      });
  };
};

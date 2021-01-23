import axios from "axios";
import {
  FETCH_BUCKETS_START,
  FETCH_BUCKETS_SUCCESS,
  FETCH_BUCKETS_FAILURE,
  CREATE_BUCKET_START,
  CREATE_BUCKET_SUCCESS,
  CREATE_BUCKET_FAILURE,
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

export const createBucketStart = () => {
  return {
    type: CREATE_BUCKET_START,
  };
};

export const createBucketSuccess = (newBucket) => {
  return {
    type: CREATE_BUCKET_SUCCESS,
    payload: newBucket,
  };
};

export const createBucketFailure = (error) => {
  return {
    type: CREATE_BUCKET_FAILURE,
    payload: error,
  };
};

export const createBucket = (bucket) => {
  return (dispatch) => {
    dispatch(createBucketStart());
    axios
      .post(`${BASE_URL}/buckets`, bucket, HEADERS)
      .then((response) => {
        const newBucket = response.data.bucket;
        dispatch(createBucketSuccess(newBucket));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(createBucketFailure(errorMessage));
      });
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

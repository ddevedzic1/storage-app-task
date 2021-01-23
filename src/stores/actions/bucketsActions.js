import axios from "axios";
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

export const openNewBucketForm = () => {
  return {
    type: OPEN_NEW_BUCKET_FORM,
  };
};

export const closeNewBucketForm = () => {
  return {
    type: CLOSE_NEW_BUCKET_FORM,
  };
};

export const setSelectedBucket = (bucketId) => {
  return {
    type: SET_SELECTED_BUCKET,
    payload: bucketId,
  };
};

export const openCloseModalBucket = () => {
  return {
    type: OPEN_CLOSE_MODAL_BUCKET,
  };
};

export const deleteBucketStart = () => {
  return {
    type: DELETE_BUCKET_START,
  };
};

export const deleteBucketSuccess = (bucketId) => {
  return {
    type: DELETE_BUCKET_SUCCESS,
    payload: bucketId,
  };
};

export const deleteBucketFailure = (error) => {
  return {
    type: DELETE_BUCKET_FAILURE,
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

export const deleteBucket = (bucketId) => {
  return (dispatch) => {
    dispatch(deleteBucketStart());
    axios
      .delete(`${BASE_URL}/buckets/${bucketId}`, HEADERS)
      .then((response) => {
        dispatch(deleteBucketSuccess(bucketId));
        /*I know this line of code has no place here,
        but for simplicity I do it this way
         window.locations = "/" is used to return the application 
         user to the home page after deleting the bucket*/
        window.location = "/";
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(deleteBucketFailure(errorMessage));
      });
  };
};

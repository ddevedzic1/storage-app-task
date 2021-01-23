import axios from "axios";
import {
  FETCH_LOCATIONS_START,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_FAILURE,
} from "../common/commonLocationsTypes";
import { BASE_URL, HEADERS } from "../common/commonApiConfig";

export const fetchLocationsStart = () => {
  return {
    type: FETCH_LOCATIONS_START,
  };
};

export const fetchLocationsSuccess = (locations) => {
  return {
    type: FETCH_LOCATIONS_SUCCESS,
    payload: locations,
  };
};

export const fetchLocationsFailure = (error) => {
  return {
    type: FETCH_LOCATIONS_FAILURE,
    payload: error,
  };
};

export const fetchLocations = () => {
  return (dispatch) => {
    dispatch(fetchLocationsStart());
    axios
      .get(`${BASE_URL}/locations`, HEADERS)
      .then((response) => {
        const locations = response.data.locations;
        dispatch(fetchLocationsSuccess(locations));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchLocationsFailure(errorMessage));
      });
  };
};

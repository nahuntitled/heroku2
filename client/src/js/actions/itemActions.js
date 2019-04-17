import axios from 'axios';
import { GET_CONFIG, GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, EDIT_ITEM, GET_COUNTRYS, ADD_COUNTRY } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get('/api/tours')
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getConfig = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get('/api/admin')
    .then(res =>
      dispatch({
        type: GET_CONFIG,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getCountrys = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get('/api/countrys')
    .then(res =>
      dispatch({
        type: GET_COUNTRYS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addItem = (item) => (dispatch, getState) => {
  axios
    .post('/api/tours', item, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addCountry = (item) => (dispatch, getState) => {
  axios
    .post('/api/countrys', item, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_COUNTRY,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const editItem = (id , item) => (dispatch, getState) => {
  axios
    .put(`/api/tours/${id}`, item, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: EDIT_ITEM,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteItem = id => (dispatch, getState) => {
  axios
    .delete(`/api/tours/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};

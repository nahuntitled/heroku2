import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
  EDIT_ITEM,
  GET_COUNTRYS,
  ADD_COUNTRY,
  GET_CONFIG,
  GET_CLIENT
} from '../js/actions/types';

const initialState = {
  items: [],
  countrys: [],
  config: [],
  client: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONFIG:
      return {
        ...state,
        config: action.payload,
        loading: false
      };
    case GET_CLIENT:
      return {
        ...state,
        client: action.payload,
        loading: false
      };
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case GET_COUNTRYS:
      return {
        ...state,
        countrys: action.payload,
        loading: false
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
    case ADD_COUNTRY:
      return {
        ...state,
        countrys: [action.payload, ...state.countrys]
      };
    case EDIT_ITEM:
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}

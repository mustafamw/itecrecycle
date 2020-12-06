import { httpRequest } from '../../../utils/httpRequest'
import { requestMethod } from '../../../constants/requestMethods';
import { store } from '../../../redux/store/store';
import { addAlert } from '../alert/alert';

export const itemsCollection = (headers, payload) => {
  httpRequest(requestMethod.POST, `v1/items-collection`, headers, payload, setItemsCollection, setItemsCollectionError);
  return {
    type: 'ITEMS_COLLECTION'
  }
}

export const setItemsCollection = (data) => {
  store.dispatch(addAlert({ type: 'success', message: data.data.message } ));
  return {
    type: 'SET_ITEMS_COLLECTION'
  }
};

export const setItemsCollectionReset = () => {
  return {
    type: 'SET_ITEMS_COLLECTION_RESET',
  }
};

export const setItemsCollectionError = (errors) => {
  return {
    type: 'SET_ITEMS_COLLECTION_ERROR',
    data: errors,
  }
};
import React from 'react';
const initialState = {
  message: '',
};
const Store = React.createContext(initialState);
export default Store;

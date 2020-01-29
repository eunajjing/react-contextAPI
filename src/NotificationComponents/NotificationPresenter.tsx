import React, { useContext } from 'react';
import Store from '../store';

const NotificationPresenter = () => {
  const contextStore = useContext(Store);
  return <>{console.log(contextStore.message)}</>;
};

export default NotificationPresenter;

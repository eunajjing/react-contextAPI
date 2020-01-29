import React from 'react';
import NotificationPresenter from './NotificationComponents/NotificationPresenter';
import Store from './store';

const App: React.FC = () => {
  let state = {
    message: 'Hello',
  };
  return (
    <Store.Provider value={state}>
      <NotificationPresenter />
    </Store.Provider>
  );
};

export default App;

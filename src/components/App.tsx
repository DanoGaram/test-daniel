import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../stateManager/reducers/Emails';
import EmailManager from './EmailManager';
import '../assets/styles/index.scss';

function App() {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <EmailManager></EmailManager>
    </Provider>
  );
}

export default App;

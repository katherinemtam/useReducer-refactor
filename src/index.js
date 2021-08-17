import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { initialState, reducer } from './state/reducer';
import { ReduxProvider } from './state/ReduxProvider';

render(
  <ReduxProvider reducer={reducer} initialState={initialState}>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
);

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RocketPage from '../component/pages/rocketpage/RocketPage';

let containers = null;
beforeEach(() => {
  // setup a DOM element as a render target
  containers = document.createElement('div');
  document.body.appendChild(containers);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(containers);
  containers.remove();
  containers = null;
});

describe('testing the app', () => {
  it('testing RocketPage UI', () => {
    act(() => {
      render(
        <Provider store={store}>
          <RocketPage />
        </Provider>, containers,
      );
    });

    expect(pretty(containers.innerHTML)).toMatchSnapshot();
  });
});

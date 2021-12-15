import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import { Provider } from 'react-redux';
import store from '../redux/configureStore'
import RocketPage from '../component/pages/rocketpage/RocketPage';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('testing calculator and events', () => {
  it('testing for events on calculator', () => {
    act(() => {
      render(<Provider store={store}> <RocketPage /> </Provider>, container);
    });

    expect(pretty(container.innerHTML)).toMatchSnapshot();

    fireEvent.click(screen.getAllByText('Reserve Rocket'));

    let displayValue;

    await waitFor(() => {
      const displayElement = container.innerHTML.querySelectorAll('.reserve-btn');
    });

    expect(displayValue).toEqual('5');
  })
})
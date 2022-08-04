import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Rockets from '../Rockets';
import store from '../../redux/configureStore';
import rocketReducer from '../../redux/rockets/rockets';
import fetchRockets from '../../redux/rockets/rocketsFetch';

describe('Jest test', () => {
  it('Match snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Rockets />
        </Provider>
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Output should be empty state', () => {
    const state = rocketReducer(undefined, {});
    expect(state).toEqual([]);
  });

  it('should return content from api', () => {
    const result = fetchRockets();
    expect(result).not.toEqual(null);
  });
});

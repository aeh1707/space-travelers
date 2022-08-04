import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import MyProfile from '../MyProfile';
import store from '../../redux/configureStore';

describe('Jest test', () => {
  it('Match snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <MyProfile />
        </Provider>
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

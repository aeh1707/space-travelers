import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { reserveMission } from '../../redux/missions/missionActions';
import missionReducer from '../../redux/missions/missionsReducers';
import store from '../../redux/configureStore';
import Missions from '../Missions';

describe('To test Mission components', () => {
  test('To Test Missions component renders successfully!', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('To test join mission status', () => {
    const Mission = [
      {
        mission_id: 1, mission_name: 'Teslar', description: 'Telstar 19V (Telstar 19 Vantage)...', reserved: false,
      },
      {
        mission_id: 2, mission_name: 'TThaicom', description: 'Thaicom is the name of a series...', reserved: false,
      },
      {
        mission_id: 3, mission_name: 'JCSAT', description: 'The JSAT constellation is a...', reserved: false,
      },
    ];

    expect(missionReducer(Mission, reserveMission(2))).toEqual(
      [
        {
          mission_id: 1, mission_name: 'Teslar', description: 'Telstar 19V (Telstar 19 Vantage)...', reserved: false,
        },
        {
          mission_id: 2, mission_name: 'TThaicom', description: 'Thaicom is the name of a series...', reserved: true,
        },
        {
          mission_id: 3, mission_name: 'JCSAT', description: 'The JSAT constellation is a...', reserved: false,
        },
      ],
    );
  });
});

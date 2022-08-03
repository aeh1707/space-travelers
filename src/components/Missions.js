import './missions.css';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import Nav from './Nav';
import { reserveMission, leaveMission } from '../redux/missions/missionActions';

const Missions = (props) => {
  const { missions } = props;
  const dispatch = useDispatch();
  const handleReserve = (id) => {
    dispatch(reserveMission(id));
  };
  const handleLeave = (id) => {
    dispatch(leaveMission(id));
  };
  return (
    <>
      <Nav />
      <table>
        <thead className="bold">
          <tr>
            <td>Mission</td>
            <td>Description</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td className="bold">{mission.mission_name}</td>
              <td className="desc">{mission.description}</td>
              <td className="buttons">
                {!mission.reserved && <span className="notMember generalM"> NOT A MEMBER</span> }
                {' '}
                {mission.reserved && <span className="member generalM"> Active Member</span> }
              </td>
              <td className="buttons">
                {!mission.reserved && <button type="button" onClick={() => handleReserve(mission.mission_id)} className="join padding-bg">Join Mission</button>}
                {mission.reserved && <button type="button" onClick={() => handleLeave(mission.mission_id)} className="leave padding-bg">Leave Mission</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

Missions.propTypes = {
  missions: PropTypes.instanceOf(Array).isRequired,
};

export default Missions;

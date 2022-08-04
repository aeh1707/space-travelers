import './missions.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchMissions, { reserveMission, leaveMission } from '../redux/missions/missionActions';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMissions());
    }
  }, []);
  const handleReserve = (id) => {
    dispatch(reserveMission(id));
  };
  const handleLeave = (id) => {
    dispatch(leaveMission(id));
  };
  return (
    <>
      <table>
        <thead className="bold">
          <tr>
            <td>Mission</td>
            <td>Description</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {missions && missions.map((mission) => (
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

export default Missions;

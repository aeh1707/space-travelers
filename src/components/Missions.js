import './missions.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Nav from './Nav';
import fetchMissions, { reserveMission, leaveMission } from '../redux/missions/missionActions';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);
  const missions = useSelector((state) => state.missions);
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
                {!mission.reserved && <span> NOT A MEMBER</span> }
                {' '}
                {mission.reserved && <span> Active Member</span> }
              </td>
              <td className="buttons">
                {!mission.reserved && <button type="button" onClick={() => handleReserve(mission.mission_id)} className="join">Join Mission</button>}
                {mission.reserved && <button type="button" onClick={() => handleLeave(mission.mission_id)} className="leave">Leave Mission</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Missions;

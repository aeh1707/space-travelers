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
      <h1>Missions</h1>
      {missions.map((mission) => (
        <div key={mission.mission_id}>
          <h2>{mission.mission_name}</h2>
          <p>{ mission.description }</p>
          {!mission.reserved && <button type="button" onClick={() => handleReserve(mission.mission_id)}>Join Mission</button>}
          {mission.reserved && <button type="button" onClick={() => handleLeave(mission.mission_id)}>Leave Mission</button> }
        </div>
      ))}
    </>
  );
};
export default Missions;

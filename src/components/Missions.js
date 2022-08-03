import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Nav from './Nav';
import fetchMissions from '../redux/missions/missionActions';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);
  const missions = useSelector((state) => state.missions);
  return (
    <>
      <Nav />
      <h1>Missions</h1>
      {missions.map((mission) => (
        <div key={mission.mission_id}>
          <h2>{mission.mission_name}</h2>
          <p>{ mission.description }</p>
          {mission.joined === false && <button type="button">Join Mission</button> }
        </div>
      ))}
    </>
  );
};
export default Missions;

import { useSelector } from 'react-redux';
import Nav from './Nav';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const joMissions = missions.filter((mission) => mission.reserved);
  return (
    <>
      <Nav />
      <h1>My Missions</h1>
      <ul>
        {joMissions.map((mission) => (<li key={mission.mission_id}>{mission.mission_name}</li>))}
      </ul>
    </>
  );
};
export default MyProfile;

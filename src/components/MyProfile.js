import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const joMissions = missions.filter((mission) => mission.reserved);
  return (
    <>
      <h1>My Missions</h1>
      <ul>
        {joMissions.map((mission) => (<li key={mission.mission_id}>{mission.mission_name}</li>))}
      </ul>
    </>
  );
};
export default MyProfile;

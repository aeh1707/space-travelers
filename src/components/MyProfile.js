import './MyProfile.css';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rockets);
  const joMissions = missions.filter((mission) => mission.reserved);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <>
      <div className="my-profile-container">
        <div className="myprofile">
          <section className="joined-missions">
            <h2>My Missions</h2>
            <ul>
              {joMissions.map((mission) => (
                <li key={mission.mission_id}>{mission.mission_name}</li>))}
            </ul>
          </section>
          <section className="reserved-rockets">
            <h2>My Rockets</h2>
            <ul>
              {reservedRockets.map((rocket) => (
                <li key={rocket.id}>{rocket.rocket_name}</li>))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};
export default MyProfile;

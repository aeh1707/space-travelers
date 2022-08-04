import './MyProfile.css';
import { useSelector } from 'react-redux';
import Nav from './Nav';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rockets);
  const joinedMissions = missions.filter((mission) => mission.reserved);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <>
      <Nav />
      <div className="my-profile-container">
        <div className="myprofile">
          <section className="joined-missions">
            <h2>My Missions</h2>
            <ul>
              {joinedMissions.map((mission) => (
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

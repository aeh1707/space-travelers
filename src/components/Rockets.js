import './Rockets.css';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import Nav from './Nav';
import { reserveRocket, leaveRocket } from '../redux/rockets/rockets';

const Rockets = (props) => {
  const { rockets } = props;
  console.log(rockets);
  const dispatch = useDispatch();
  const handleReserveRocket = (id) => {
    dispatch(reserveRocket(id));
  };
  const handleLeaveRocket = (id) => {
    dispatch(leaveRocket(id));
  };

  return (
    <>
      <Nav />
      <ul id="rockets">
        {rockets.map((rocket) => (
          <li className="rocket" key={rocket.id}>
            <img className="rocket-image" src={rocket.flickr_images} alt={`${rocket.rocket_name} rocket`} />
            <div className="rocket-info">
              <h2 className="rocket-name">{rocket.rocket_name}</h2>
              <p className="rocket-description">
                {rocket.reserved && <span className="reserved-badge">Reserved</span> }
                &nbsp;
                {rocket.description}
              </p>
              {!rocket.reserved && <button type="button" className="rocket-reserve btn" onClick={() => handleReserveRocket(rocket.id)}>Reserver Rocket</button>}
              {rocket.reserved && <button type="button" className="rocket-cancel btn" onClick={() => handleLeaveRocket(rocket.d)}>Cancel Reservation</button>}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

Rockets.propTypes = {
  rockets: PropTypes.instanceOf(Array).isRequired,
};

export default Rockets;

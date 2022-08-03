import './Rockets.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Nav from './Nav';
import { fetchRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);
  const rockets = useSelector((state) => state.rockets);

  return (
    <>
      <Nav />
      <ul id="rockets">
        {rockets.map((rocket) => (
          <li className="rocket" key={rocket.id}>
            <img className="rocket-image" src={rocket.flickr_images} alt={`${rocket.rocket_name} rocket`} />
            <div className="rocket-info">
              <h2 className="rocket-name">{rocket.rocket_name}</h2>
              <p className="rocket-description">{rocket.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Rockets;

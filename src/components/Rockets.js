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
      <h1>Rockets</h1>
      {rockets.map((rocket) => (
        <article key={rocket.id}>
          <h2>{rocket.rocket_name}</h2>
          <p>{ rocket.description }</p>
        </article>
      ))}
    </>
  );
};
export default Rockets;

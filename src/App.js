import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import fetchMissions from './redux/missions/missionActions';
import fetchRockets from './redux/rockets/rocketsFetch';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);
  const state = useSelector((state) => state);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rockets rockets={state.rockets} />} />
        <Route path="/missions" element={<Missions missions={state.missions} />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

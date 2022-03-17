import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const setActiveLink = ({ isActive }) => (isActive ? s.activeLink : s.link);
const Navigation = () => (
  <>
    <nav>
      <NavLink to="/" className={setActiveLink}>
        Home
      </NavLink>
      <NavLink to="/movies" className={setActiveLink}>
        Movies
      </NavLink>
    </nav>
  </>
);
export default Navigation;

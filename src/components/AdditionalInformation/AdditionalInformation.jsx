import { NavLink, useLocation } from 'react-router-dom';
import s from './AdditionalInformation.module.css';

const setActiveLink = ({ isActive }) => (isActive ? s.activeLink : s.link);

export default function AdditionalInformation() {
  const location = useLocation();
  return (
    <div className={s.wrap}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to={`cast`} state={location.state} className={setActiveLink}>
            Cast
          </NavLink>
        </li>
        <li className={s.itemR}>
          <NavLink
            to={`reviews`}
            state={location.state}
            className={setActiveLink}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

import { useNavigate } from 'react-router-dom';
import s from './OnGoBackButton.module.css';
import { PropTypes } from 'prop-types';

export default function OnGoBackButton({ location }) {
  const navigate = useNavigate();
  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };
  return (
    <button type="button" className={s.btn} onClick={onGoBack}>
      Back
    </button>
  );
}

OnGoBackButton.propTypes = {
  location: PropTypes.object.isRequired,
};

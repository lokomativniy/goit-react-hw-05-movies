import { BallTriangle } from 'react-loader-spinner';
import s from './Loader.module.css';

export default function Loader() {
  return (
    <div className={s.Loader}>
      <BallTriangle color="teal" height={80} width={80} /> Loading...
    </div>
  );
}

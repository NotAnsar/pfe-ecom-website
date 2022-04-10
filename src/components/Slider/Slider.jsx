import { Link } from 'react-router-dom';
import classes from './Slider.module.scss';

export const Slider = () => {
  return (
    <div className={classes.container}>
      <div className={classes.img}></div>
      <div className={classes.text}>
        <h3>New Phones Are Out</h3>
        <Link to='/shop' className={classes.button}>
          Shop All
        </Link>
      </div>
    </div>
  );
};

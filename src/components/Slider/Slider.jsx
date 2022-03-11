import Slide from '../../images/SlidePs5.png';
import classes from './Slider.module.scss';

export const Slider = () => {
  return (
    <div className={classes.container}>
      <img src={Slide} alt='' />
    </div>
  );
};

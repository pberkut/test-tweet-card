import css from './CardItem.module.css';
import image from '../../images/image.png';
import logo from '../../images/logo.svg';
import { numberWithComma } from '../../utils/numberWithComma';

const CardItem = () => {
  return (
    <div className={css.card}>
      <img className={css.logo} src={logo} alt="logo" />
      <img className={css.image} src={image} alt="decoration" />
      <div className={css.containerWrapper}>
        <div className={css.rectangle}></div>
        <div className={css.outerCircle}>
          <div className={css.innerCircle}>
            <img
              className={css.avatar}
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/342.jpg"
              alt="Elon Mask"
            />
          </div>
        </div>
      </div>
      <p className={css.text}>
        <span className={css.number}>777</span>
        <span> tweets</span>
      </p>
      <p className={css.text}>
        <span className={css.number}>{numberWithComma(100500)}</span>
        <span> followers</span>
      </p>
      <button className={css.button}>follow {/*following */}</button>
    </div>
  );
};

export { CardItem };

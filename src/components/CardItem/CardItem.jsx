import PropTypes from 'prop-types';
import css from './CardItem.module.css';
import image from '../../images/image.png';
import logo from '../../images/logo.svg';
import { numberWithComma } from '../../utils/numberWithComma';

const CardItem = ({ card }) => {
  const { id, user, avatar, tweets, followers } = card;

  return (
    <div className={css.card}>
      <img className={css.logo} src={logo} alt="logo" />
      <img className={css.image} src={image} alt="decoration" />
      <div className={css.containerWrapper}>
        <div className={css.rectangle}></div>
        <div className={css.outerCircle}>
          <div className={css.innerCircle}>
            <img className={css.avatar} src={avatar} alt={user} />
          </div>
        </div>
      </div>
      <p className={css.text}>
        <span className={css.number}>{tweets}</span>
        <span> tweets</span>
      </p>
      <p className={css.text}>
        <span className={css.number}>{numberWithComma(followers)}</span>
        <span> followers</span>
      </p>
      <button className={css.button}>follow {/*following */}</button>
    </div>
  );
};

CardItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};

export { CardItem };

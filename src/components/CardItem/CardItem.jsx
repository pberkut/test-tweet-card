import PropTypes from 'prop-types';
import css from './CardItem.module.css';
import image from '../../images/image.png';
import logo from '../../images/logo.svg';
import { numberWithComma } from '../../utils/numberWithComma';
import { Button } from 'components/Button';
import { useState } from 'react';

const CardItem = ({ user }) => {
  const { user: username, avatar, tweets, followers } = user;

  const [selected, setSelected] = useState(true);

  const handleSelect = () => {
    setSelected(prevSelected => !prevSelected);
  };

  return (
    <div className={css.card}>
      <img className={css.logo} src={logo} alt="logo" />
      <img src={image} alt="decoration" />
      <div className={css.containerWrapper}>
        <div className={css.rectangle}></div>
        <div className={css.outerCircle}>
          <div className={css.innerCircle}>
            <img className={css.avatar} src={avatar} alt={username} />
          </div>
        </div>
      </div>
      <p className={css.text}>
        <span className={css.number}>{numberWithComma(tweets)}</span>
        <span> tweets</span>
      </p>
      <p className={css.text}>
        <span className={css.number}>{numberWithComma(followers)}</span>
        <span> followers</span>
      </p>
      <Button selected={selected} onClick={handleSelect}>
        {selected ? 'following' : 'follow'}
      </Button>
    </div>
  );
};

CardItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};

export { CardItem };

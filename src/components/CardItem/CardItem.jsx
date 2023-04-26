import PropTypes from 'prop-types';
import css from './CardItem.module.css';
import image from '../../images/image.png';
import logo from '../../images/logo.svg';
import { numberWithComma } from '../../utils/numberWithComma';
import { Button } from '../Button';
import { useEffect, useRef, useState } from 'react';

const CardItem = ({ twiUser, handleFollowClick }) => {
  const { followers, user, tweets, avatar, isFollowed } = twiUser;
  const [isLoading, setIsLoading] = useState(false);

  const endRef = useRef(null);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });

  const handleClick = async () => {
    setIsLoading(true);
    const updatedUser = {
      ...twiUser,
      followers: isFollowed ? followers - 1 : followers + 1,
      isFollowed: !isFollowed,
    };

    try {
      await handleFollowClick(updatedUser);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={css.card}>
      <img className={css.logo} src={logo} alt="logo" />
      <img src={image} alt="decoration" />
      <div className={css.containerWrapper}>
        <div className={css.rectangle}></div>
        <div className={css.outerCircle}>
          <div className={css.innerCircle}>
            <img className={css.avatar} src={avatar} alt={user} />
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
      <Button
        onClick={handleClick}
        name="follow"
        isFollowing={isFollowed}
        disabled={isLoading}
      >
        {isFollowed ? 'following' : 'follow'}
      </Button>
      <div ref={endRef}></div>
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

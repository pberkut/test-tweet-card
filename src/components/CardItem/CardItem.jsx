import PropTypes from 'prop-types';
import css from './CardItem.module.css';
import image from '../../images/image.png';
import logo from '../../images/logo.svg';
import { numberWithComma } from '../../utils/numberWithComma';
import { Button } from '../Button';
import { useEffect, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { updateUser } from '../../services/mockAPI';

const CardItem = ({ user }) => {
  const { id, user: username, avatar, tweets, followers } = user;
  const [newFollower, setNewFollower] = useState(followers);
  const [selected, setSelected] = useLocalStorage(`selected-${id}`, false);

  useEffect(() => {
    const updateData = async () => {
      try {
        await updateUser(id, newFollower);
      } catch (error) {
        console.log(error);
      }
    };

    updateData();
  }, [id, newFollower]);

  const handleFollowClick = () => {
    if (!selected) {
      setSelected(true);
      setNewFollower(prevState => prevState + 1);
    } else {
      setSelected(false);
      setNewFollower(prevState => prevState - 1);
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
            <img className={css.avatar} src={avatar} alt={username} />
          </div>
        </div>
      </div>
      <p className={css.text}>
        <span className={css.number}>{numberWithComma(tweets)}</span>
        <span> tweets</span>
      </p>
      <p className={css.text}>
        <span className={css.number}>{numberWithComma(newFollower)}</span>
        <span> followers</span>
      </p>
      <Button selected={selected} onClick={handleFollowClick}>
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

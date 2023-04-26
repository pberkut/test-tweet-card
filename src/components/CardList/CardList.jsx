import PropTypes from 'prop-types';

import { CardItem } from '../CardItem';
import styles from './CardList.module.css';

const CardList = ({ users, handleFollowClick }) => {
  return (
    <ul className={styles.list}>
      {users.map(user => (
        <li key={user.id}>
          <CardItem twiUser={user} handleFollowClick={handleFollowClick} />
        </li>
      ))}
    </ul>
  );
};

CardList.propTypes = {
  users: PropTypes.array,
};

export { CardList };

import PropTypes from 'prop-types';

import { CardItem } from '../CardItem';
import css from './Cardlist.module.css';

const CardList = ({ users, handleFollowClick }) => {
  return (
    <ul className={css.list}>
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

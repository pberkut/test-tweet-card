import PropTypes from 'prop-types';

import { CardItem } from '../CardItem';
import css from './CardList.module.css';

const CardList = ({ users }) => {
  return (
    <ul className={css.list}>
      {users.map(user => (
        <li key={user.id}>
          <CardItem user={user} />
        </li>
      ))}
    </ul>
  );
};

CardList.propTypes = {
  users: PropTypes.array,
};

export { CardList };

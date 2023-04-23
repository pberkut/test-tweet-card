import { CardItem } from '../CardItem';
// import css from './CardList.module.css';

const CardList = ({ users }) => {
  return (
    // className={css.list}
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <CardItem user={user} />
        </li>
      ))}
    </ul>
  );
};

export { CardList };

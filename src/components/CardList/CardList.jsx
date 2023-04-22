import { CardItem } from '../CardItem';
import css from './Cardlist.module.css';

const CardList = () => {
  return (
    <>
      <ul className={css.list}>
        <li>
          <CardItem />
        </li>
        <li>
          <CardItem />
        </li>
        <li>
          <CardItem />
        </li>
        <li>
          <CardItem />
        </li>
        <li>
          <CardItem />
        </li>
        <li>
          <CardItem />
        </li>
        <li>
          <CardItem />
        </li>
      </ul>
    </>
  );
};

export { CardList };

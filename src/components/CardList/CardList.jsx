import { CardItem } from '../CardItem';
import css from './CardList.module.css';

const CardList = ({ cards }) => {
  return (
    <>
      <ul className={css.list}>
        {cards.map(card => (
          <li key={card.id}>
            <CardItem card={card} />
          </li>
        ))}
      </ul>
    </>
  );
};

export { CardList };

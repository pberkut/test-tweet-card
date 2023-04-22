import { useEffect, useState } from 'react';
import { CardList } from './CardList';
import { Container } from './Container';
import { fetchUsers } from 'services/mockAPI';

const initialState = [
  {
    user: 'Elon Mask',
    tweets: 777,
    followers: 100500,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/342.jpg',
    id: '1',
  },
  {
    user: 'Keanu Reeves',
    tweets: 555,
    followers: 800300,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/696.jpg',
    id: '2',
  },
  {
    user: 'Joe Biden',
    tweets: 333,
    followers: 1000001,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/317.jpg',
    id: '3',
  },
  {
    user: 'Bill Gates',
    tweets: 1000,
    followers: 7777,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/388.jpg',
    id: '4',
  },
  {
    user: 'Mark Zuckerberg',
    tweets: 999,
    followers: 3003,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/675.jpg',
    id: '5',
  },
  {
    user: 'Kristopher Davis',
    tweets: 59,
    followers: 30399,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/287.jpg',
    id: '6',
  },
  {
    user: 'Jordan Roberts',
    tweets: 82,
    followers: 53889,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/613.jpg',
    id: '7',
  },
  {
    user: 'Mrs. Brooke Flatley',
    tweets: 54,
    followers: 25376,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/634.jpg',
    id: '8',
  },
  {
    user: 'Edmund Donnelly',
    tweets: 22,
    followers: 32568,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/811.jpg',
    id: '9',
  },
  {
    user: 'Guillermo Homenick',
    tweets: 38,
    followers: 21172,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/265.jpg',
    id: '10',
  },
  {
    user: 'Kent Runte',
    tweets: 56,
    followers: 32044,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/53.jpg',
    id: '11',
  },
  {
    user: 'Angela Pfannerstill',
    tweets: 6,
    followers: 85366,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1213.jpg',
    id: '12',
  },
];

export const App = () => {
  const [cards, setCards] = useState(initialState);

  return (
    <Container>
      <CardList cards={cards} />
    </Container>
  );
};

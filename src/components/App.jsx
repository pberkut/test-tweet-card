import { useEffect, useState } from 'react';
import { CardList } from './CardList';
import { Container } from './Container';
import { fetchUsers } from 'services/mockAPI';

export const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFollow = () => {};

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);

      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, []);

  return (
    <Container>
      {!error ? <CardList users={users} /> : <p>{error.message}</p>}
      {isLoading && <p>Loading...</p>}
    </Container>
  );
};

import { useEffect, useState } from 'react';
import { CardList } from './CardList';
import { Container } from './Container';
import { fetchUsers, updateUser } from 'services/mockAPI';
import { Button } from './Button';
import { Loader } from './Loader';

export const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);

      try {
        const newUsers = await fetchUsers(page);
        setUsers(prevUsers => [...prevUsers, ...newUsers]);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Container>
        {!error ? <CardList users={users} /> : <p>{error.message}</p>}
      </Container>
      <Container>
        <Button onClick={handleLoadMore}>
          {isLoading ? <Loader /> : 'Load more'}
        </Button>
      </Container>
    </>
  );
};

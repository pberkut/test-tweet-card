import { Button } from '../../components/Button';
import { CardList } from '../../components/CardList';
import { Container } from '../../components/Container';
import { Loader } from '../../components/Loader';
import { useEffect, useState } from 'react';
import { fetchUsers } from '../../services/mockAPI';

function Tweets() {
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
}

export default Tweets;

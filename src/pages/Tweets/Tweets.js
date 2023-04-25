import { Button } from '../../components/Button';
import { CardList } from '../../components/CardList';
import { Container } from '../../components/Container';
import { Loader } from '../../components/Loader';
import { useEffect, useLayoutEffect, useState } from 'react';
import { fetchAllUsers, fetchUsers } from '../../services/mockAPI';

import { LIMIT_CARDS } from 'utils/constant';

function Tweets() {
  const [users, setUsers] = useState([]);
  const [allUsersLength, setAllUsersLength] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [selectedOption, setSelectedOption] = useState('Show all');
  const [page, setPage] = useState(1);
  // const [availablePagination, setAvailablePagination] = useState(true);
  const [showLoadMore, setShowLoadMore] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const users = await fetchAllUsers();
        setAllUsersLength(users.length);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);

      try {
        if (page === 1) {
          setIsLoading(true);
        }

        const users = await fetchUsers(page);

        if (page === 1) {
          setUsers([...users]);
          setShowLoadMore(true);

          return;
        }
        setUsers(prev => [...prev, ...users]);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, [page]);

  useEffect(() => {
    if (users.length >= allUsersLength) {
      setShowLoadMore(false);
    }
  }, [users.length, allUsersLength]);

  useLayoutEffect(() => {
    if (page === 1) {
      return;
    }
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  });

  const handleOptionChange = e => {
    const option = e.target.value;
    setSelectedOption(option);
    console.log(option);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const visibleUsers = getVisibleUsers(users, filter);

  return (
    <>
      <Container>
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="Show all">Show all</option>
          <option value="Follow">Follow</option>
          <option value="Followings">Followings</option>
        </select>
      </Container>
      <Container>
        {!error ? <CardList users={visibleUsers} /> : <p>{error.message}</p>}
      </Container>
      <Container>
        {showLoadMore ? (
          <Button onClick={handleLoadMore}>
            {isLoading ? <Loader /> : 'Load more'}
          </Button>
        ) : (
          <Button onClick={handleToUp}>⬆️UP⬆️</Button>
        )}
        {/* {!availablePagination && } */}
      </Container>
    </>
  );
}

export default Tweets;

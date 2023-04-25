import { Button } from '../../components/Button';
import { CardList } from '../../components/CardList';
import { Container } from '../../components/Container';
import { Loader } from '../../components/Loader';
import { useEffect, useLayoutEffect, useState } from 'react';
import { fetchAllUsers, fetchUsers } from '../../services/mockAPI';

import { statusFilterOptions, statusFilters } from 'utils/constant';
import { getFilteredUsers } from 'utils/getFilteredUsers';
import { Dropdown } from 'components/DropDownMenu/DropDownMenu';

function Tweets() {
  const [users, setUsers] = useState([]);
  const [allUsersLength, setAllUsersLength] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [filter, setFilter] = useState(statusFilters.all);

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

  const handleOptionChange = value => {
    setFilter(value);
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

  const visibleUsers = getFilteredUsers(users, filter);

  return (
    <>
      <Container>
        <Dropdown
          options={statusFilterOptions}
          value={filter}
          onSelect={handleOptionChange}
        />
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
          !isLoading && <Button onClick={handleToUp}>⬆️UP⬆️</Button>
        )}
      </Container>
    </>
  );
}

export default Tweets;

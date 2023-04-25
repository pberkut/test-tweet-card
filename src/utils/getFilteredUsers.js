import { statusFilters } from './constants';

const getFilteredUsers = (users, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.notFollowed:
      return users.filter(user => user.isFollowed === false);
    case statusFilters.followed:
      return users.filter(user => user.isFollowed === true);
    default:
      return users;
  }
};

export { getFilteredUsers };

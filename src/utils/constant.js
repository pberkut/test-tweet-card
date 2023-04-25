const statusFilters = {
  all: 'all',
  followed: 'followed',
  notFollowed: 'notFollowed',
};

const statusFilterOptions = [
  { label: 'All', value: statusFilters.all },
  { label: 'Followed', value: statusFilters.followed },
  { label: 'Not Followed', value: statusFilters.notFollowed },
];

export { statusFilterOptions, statusFilters };

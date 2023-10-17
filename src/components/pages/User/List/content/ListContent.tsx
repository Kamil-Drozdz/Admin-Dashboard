import UserFilter from './UserFilter';
import UserList from './UserList';
import { useState } from 'react';

const ListContent = () => {
  const [filters, setFilters] = useState({ role: 'All', plan: 'All', status: 'All' });

  return (
    <div className='space-y-6'>
      <UserFilter filters={filters} setFilters={setFilters} />
      <UserList filters={filters} />
    </div>
  );
};

export default ListContent;

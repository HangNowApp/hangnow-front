import { CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import { clientJson } from '~/client/client';
import { User } from '~/client/types/User';
import { useAuthContext } from '~/hooks/context/AuthContext';

export default function Users() {
  const authContext = useAuthContext();
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const lastSearchTextRef = useRef<string>('');

  if (authContext.isLoading) {
    return <CircularProgress />;
  }

  if (!authContext.user) {
    return null;
  }

  if (!authContext.user.roles?.includes('Admin')) {
    void router.push('/');
    return null;
  }

  const onSubmit = (searchText?: string) => {
    clientJson<User[]>(
      `auth/search?query=${searchText ?? lastSearchTextRef.current}`
    )
      .then(setUsers)
      .catch(() => {
        console.error('error');
      });
    if (searchText) {
      lastSearchTextRef.current = searchText;
    }
  };

  return (
    <div>
      <h1>Users</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const form = event.currentTarget;

          const searchText = form.search.value;
          onSubmit(searchText);
        }}
      >
        <input id="search" type="text" placeholder="Search" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <UserCard
              refresh={() => {
                onSubmit();
              }}
              user={user}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

const UserCard = ({ user, refresh }: { user: User; refresh: () => void }) => {
  const isAdmin = user.roles?.includes('Admin');

  const handleAdmin = () => {
    clientJson(`auth/${user.id}/Admin`, { method: 'POST' })
      .then(() => {
        refresh();
      })
      .catch(() => void 0);
  };

  return (
    <div>
      <h2>{user.userName}</h2>
      <p>{user.email}</p>
      <p>Roles: {user.roles?.join(',')}</p>
      <button onClick={handleAdmin}>
        {isAdmin ? 'Remove admin' : 'Make admin'}
      </button>
    </div>
  );
};

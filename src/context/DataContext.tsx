import React, { createContext, FC, useState } from 'react';
import { isUserLoggedIn } from '../services/userService';

export const DataContext: any = createContext({});

interface DataContextProps {
  children?: React.ReactNode;
}

export const DataProvider: FC<DataContextProps> = (props) => {
  const stringUser: any = localStorage.getItem('user')
    ? localStorage.getItem('user')
    : '';
  const [user, setUser] = useState(stringUser ? JSON.parse(stringUser) : null);
  return (
    <DataContext.Provider value={{ user, setUser }}>
      {' '}
      {props.children}{' '}
    </DataContext.Provider>
  );
};

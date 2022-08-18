import React, { createContext, FC, useState } from 'react';
import { isUserLoggedIn } from '../services/userService';

export const DataContext: any = createContext({});

interface DataContextProps {
  children?: React.ReactNode;
}

export const DataProvider: FC<DataContextProps> = (props) => {
  const [user, setUser] = useState(isUserLoggedIn());
  return (
    <DataContext.Provider value={{ user, setUser }}>
      {' '}
      {props.children}{' '}
    </DataContext.Provider>
  );
};

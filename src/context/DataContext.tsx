import React, { ReactNode, createContext, useContext, useState } from "react";

type DataProviderProps = {
  children: ReactNode;
};

interface BookProps {
  id: string;
  title: string;
  author: string;
  price: number;
  imgUrl: string;
  genre: string;
  pages: number;
  description: string;
}

type DataContextProps = {
  books: BookProps[];
  addBooksToContextHandler: (data: BookProps[]) => void;
};

const DataContext = createContext({} as DataContextProps);

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }: DataProviderProps) => {
  const [books, setBooks] = useState<BookProps[]>([]);

  const addBooksToContextHandler = (data: BookProps[]) => {
    setBooks([...data]);
  };

  return (
    <DataContext.Provider value={{ books, addBooksToContextHandler }}>
      {children}
    </DataContext.Provider>
  );
};

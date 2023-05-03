import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import SearchedTermListItem from "./SearchedTermListItem";
import { useDataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type StoreItemProps = {
  id: string;
  title: string;
  author: string;
  price: number;
  imgUrl: string;
  genre: string;
  pages: number;
  description: string;
};

const Header = () => {
  const [term, setTerm] = useState("");
  const [searchedTermBooks, setSearchedTermBooks] = useState<
    StoreItemProps[] | null
  >(null);
  const [searchedTerm, setSearchedTerm] = useState<string | null>(null);

  const navigate = useNavigate();

  const searchInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchedTerm(e.target.value);
  };

  const { books } = useDataContext();

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (!searchedTerm) {
        setSearchedTermBooks(null);
        return;
      }
      const results = books.filter(
        (item) =>
          item.title.toLowerCase().includes(searchedTerm.toLowerCase()) ||
          item.author.toLowerCase().includes(searchedTerm.toLowerCase())
      );
      setSearchedTermBooks([...results]);
    }, 500);
    // clean up
    return () => {
      clearTimeout(identifier);
    };
  }, [searchedTerm]);

  const searchedTermHandler = () => {
    setSearchedTermBooks(null);
    setSearchedTerm("");
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchedTerm) {
      return;
    }
    const result = books.filter(
      (item) => item.title.toLowerCase() === searchedTerm?.toLowerCase()
    );
    const book = result[0];
    if (result && result.length > 0) {
      setSearchedTermBooks(null);
      setSearchedTerm("");
      navigate(`/store/${book.id}`);
    } else {
      toast.error("Searched term not found");
    }
  };

  return (
    <div className="max-w-[1700px] flex flex-col gap-4 md:flex-row justify-center md:justify-between items-center top-16 left-0 sticky bg-blue-100 mx-auto px-4 py-4 z-20">
      <img src="/images/icons/logo.png" alt="logo" />
      <div className="w-full sm:w-3/4 md:w-1/2 flex flex-col relative">
        <form className="w-full flex" onSubmit={submitHandler}>
          <input
            type="text"
            className="flex-1 border-none outline-none px-2 py-1"
            onChange={searchInputChangeHandler}
            value={searchedTerm ? searchedTerm : ""}
          />
          <button className="w-6 h-auto bg-white bg-[url('../../images/icons/searchIcon.png')] bg-contain bg-no-repeat bg-center border-l-2 border-blue-200 p-1"></button>
        </form>
        {searchedTermBooks && (
          <ul className="w-full absolute top-10 right-0 bg-white max-h-[500px] overflow-y-auto">
            {searchedTermBooks?.map((item) => (
              <SearchedTermListItem
                key={item.id}
                {...item}
                searchedTermHandler={searchedTermHandler}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;

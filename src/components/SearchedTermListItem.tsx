import React from "react";

type StoreItemProps = {
  id: number;
  title: string;
  author: string;
  price: number;
  imgUrl: string;
  index: number;
};

const SearchedTermListItem = ({ title, author, imgUrl }: StoreItemProps) => {
  return (
    <li className="flex items-center gap-1 p-1 border-b-2 border-slate-200">
      <img src={imgUrl} alt="cover" className="w-10" />
      <div className="flex flex-col">
        <span>{title}</span>
        <span className="text-sm">{author}</span>
      </div>
    </li>
  );
};

export default SearchedTermListItem;

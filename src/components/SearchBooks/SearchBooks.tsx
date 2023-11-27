import { FC, ChangeEventHandler } from 'react';
import './SearchBooks.scss';

type Props = {
  searchPhrase: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchBooks: FC<Props> = ({ searchPhrase, onChange }) => {
  return (
    <>
    <h1 className="header__title">Search for books</h1>
      <div className="header__search">
          <input
            type="search"
            value={searchPhrase}
            onChange={onChange}
            className="header__search-input"
          />
      </div>
    </>
  )
}

export default SearchBooks;

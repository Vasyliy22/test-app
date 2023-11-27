import { FC, ChangeEventHandler } from 'react';
import './FilterAndSortBooks.scss';

type Props = {
  onFilter: ChangeEventHandler<HTMLSelectElement>;
  onSort: ChangeEventHandler<HTMLSelectElement>;
}

const FiltertAndSortBook: FC<Props> = ({ onFilter, onSort }) => {
  return (
    <div className="header__select">
      <div className="header__select-block">
        <select
          name="filter"
          // value={filter}
          className="header__select-filter"
          onChange={onFilter}
        >
          <option value="all">all</option>
          <option value="Arts">Arts</option>
          <option value="Biography">Biography</option>
          <option value="Computers">Computers</option>
          <option value="History">History</option>
          <option value="Medical">Medical</option>
          <option value="Poetry">Poetry</option>
          <option value="Philosophy">Philosophy</option>

        </select>
      </div>
      <div className="header__select-block header__select-block--sort">
        <select name="" id="" onChange={onSort} className="header__select-sort">
          <option value="relevance">relevance</option>
          <option value="newest">newest</option>
        </select>
      </div>
    </div>
  )
}

export default FiltertAndSortBook;

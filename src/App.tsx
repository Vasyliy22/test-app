import { Routes, Route, useNavigate } from 'react-router-dom';
// import { use } from 'react-router';
import React, { useEffect, ChangeEventHandler, MouseEventHandler } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import './App.scss';
import { loadBooksThunk, loadMoreBooksThunk } from './store/thunks';
import { selectBooks, selectFilter, selectLoading, selectLoadingMore, selectSearchPhrase, selectSort, selectTotalCount } from './store/selectors';
import { Loader } from './components/Loader';
import Spinner from './components/Spinner';
import SearchBooks from './components/SearchBooks/SearchBooks';
import FiltertAndSortBook from './components/FilterAndSortBooks/FiltertAndSortBook';
import BooksList from './components/BooksList/BooksList';
import LoadMore from './components/LoadMore/LoadMore';
import CurrentCard from './components/CurrentCard/CurrentCard';
// import { BookType } from './store/reducer';
import { setFilter, setSearchPhrase, setSort } from './store/actions';
import { getUpdatedBooksList } from './utils/getUpdatedBooksList';

function App() {
  const dispatch = useAppDispatch();
  const booksList = useAppSelector(selectBooks);
  const loading = useAppSelector(selectLoading);
  const loadingMore = useAppSelector(selectLoadingMore);
  const totalCount = useAppSelector(selectTotalCount);
  const filter = useAppSelector(selectFilter);
  const sort = useAppSelector(selectSort);
  const searchPhrase = useAppSelector(selectSearchPhrase);
  const navigate = useNavigate();

  const handleLoadMore = () => {
     dispatch(loadMoreBooksThunk());
  };

  const handleFilter: ChangeEventHandler<HTMLSelectElement> = ({ target: { value } }) => {
    dispatch(setFilter(value));
  }

  const handleSort: ChangeEventHandler<HTMLSelectElement> = ({ target: { value } }) => {
    dispatch(setSort(value));
  }

  const handleChangeSearch: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    dispatch(setSearchPhrase(value));
  };

  const handleRedirect: (id: string) => MouseEventHandler<HTMLDivElement> = (id) => () => {
    navigate(id);
  };

  useEffect(() => {
    dispatch(loadBooksThunk());
  }, [dispatch]);

  const updatedBooks = getUpdatedBooksList(booksList, { 
      filter, sort, search: searchPhrase,
   });

  return (
    <div className="App">
      <header className="header">
        <div className="header__content">
          <SearchBooks
            searchPhrase={searchPhrase}
            onChange={handleChangeSearch}
          />

          <FiltertAndSortBook onFilter={handleFilter} onSort={handleSort} />
        </div>
      </header>

      <main>
        <Routes>
          <Route path='/' element={
            <div className="container">
              <p className="books-length">Found {updatedBooks.length} results</p>
              {loading
                ? <Loader />
                : (
                  <ul className="list">
                    {updatedBooks.map((item, index) => {
                      const { id, volumeInfo: { title, categories, authors, imageLinks } } = item;
                      return (
                        <BooksList
                          key={id + index}
                          title={title}
                          categories={categories}
                          authors={authors}
                          imageLinks={imageLinks}
                          onClick={handleRedirect(id)}
                          id={id}
                        />
                      )
                    })}
                  </ul>
                )
              }
              {!loading && totalCount > booksList.length &&
                <div className="action">
                  {loadingMore
                    ? <Spinner />
                    : (
                      <LoadMore handleLoadMore={handleLoadMore} />
                    )
                  }
                </div>}
            </div>
          }/>

          <Route path='/:bookId' element={<CurrentCard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

import { getBooks } from '../api';
import { appendBooks, setCurrentBook, setBooks, setLoading, setLoadingMore, setTotalCount } from './actions';
import { AppDispatch, RootState } from '../store'
import { selectBooks } from './selectors';
import { BookType } from './reducer';

export const loadBooksThunk = () => (
  dispatch: AppDispatch,
) => {
  dispatch(setLoading(true));
  getBooks().then(({ items, totalItems }) => {
    dispatch(setBooks(items));
    dispatch(setTotalCount(totalItems));
  }).finally(() => {
    dispatch(setLoading(false));
  })
};

export const loadMoreBooksThunk = () => (
  dispatch: AppDispatch,
  getState: () => RootState,
) => {
  const state = getState();
  const booksList = selectBooks(state);

  dispatch(setLoadingMore(true));
  getBooks({ startIndex: String(booksList.length) }).then(({ items }) => {
    dispatch(appendBooks(items));
  }).finally(() => {
    dispatch(setLoadingMore(false));
  })
};

export const loadCurrentBookThunk = (id: string) => (
  dispatch: AppDispatch,
) => {
  dispatch(setLoading(true));
  getBooks().then(({ items }) => {
    dispatch(setCurrentBook(items.find((item: BookType)=> item.id === id)));
  }).finally(() => {
    dispatch(setLoading(false));
  })
};

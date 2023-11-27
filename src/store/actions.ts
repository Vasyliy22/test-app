import {
  SET_BOOKS,
  SET_FILTER,
  SET_LOADING,
  SET_LOADING_MORE,
  SET_SEARCH_PHRASE,
  SET_SORT,
  SET_TOTAL_COUNT,
  APPEND_BOOKS,
  SET_CURRENT_BOOK,
  CLEAR_CURRENT_BOOK,
} from './constants';
import { BookType } from './reducer';

export const setBooks = (payload: BookType[]) => ({ type: SET_BOOKS, payload });
export const setFilter = (payload: string) => ({ type: SET_FILTER, payload });
export const setLoading = (payload: boolean) => ({ type: SET_LOADING, payload });
export const setLoadingMore = (payload: boolean) => ({ type: SET_LOADING_MORE, payload });
export const setSearchPhrase = (payload: string) => ({ type: SET_SEARCH_PHRASE, payload });
export const setSort= (payload: string) => ({ type: SET_SORT, payload });
export const setTotalCount = (payload: number) => ({ type: SET_TOTAL_COUNT, payload });
export const appendBooks = (payload: BookType[]) => ({ type: APPEND_BOOKS, payload });
export const setCurrentBook = (payload: BookType) => ({ type: SET_CURRENT_BOOK, payload });
export const clearCurrentBook = () => ({ type: CLEAR_CURRENT_BOOK });


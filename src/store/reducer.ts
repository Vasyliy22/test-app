import {
  APPEND_BOOKS,
  SET_BOOKS,
  SET_CURRENT_BOOK,
  SET_FILTER,
  SET_LOADING,
  SET_LOADING_MORE,
  SET_SEARCH_PHRASE,
  SET_SORT,
  SET_TOTAL_COUNT,
  CLEAR_CURRENT_BOOK,
} from './constants';

export type BookType = {
  id: string,
  volumeInfo: {
    title: string,
    categories: string[],
    authors: string[],
    publishedDate: string,
    description: string,
    imageLinks: {
      smallThumbnail: string,
      thumbnail: string
    }
  }
}

type TStore = {
  books: BookType[],
  filter: string,
  sort: string,
  totalCount: number,
  searchPhrase: string,
  loading: boolean,
  loadingMore: boolean,
  currentBook: BookType | null,
}

const INITIAL_STATE: TStore = {
  books: [],
  filter: '',
  sort: '',
  totalCount: 0,
  searchPhrase: '',
  loading: false,
  loadingMore: false,
  currentBook: null,
};

export const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_BOOKS:
      return { ...state, books: action.payload };
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_LOADING_MORE:
      return { ...state, loadingMore: action.payload };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    case SET_SORT:
      return { ...state, sort: action.payload };
    case SET_SEARCH_PHRASE:
      return { ...state, searchPhrase: action.payload };
    case APPEND_BOOKS:
      return { ...state, books: [ ...state.books, ...action.payload] };
    case SET_CURRENT_BOOK:
      return { ...state, currentBook: action.payload };
    case CLEAR_CURRENT_BOOK:
      return { ...state, currentBook: null };
    default:
      return state;
  }
};

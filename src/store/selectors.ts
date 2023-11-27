import { RootState } from '.';

export const selectBooks = (state: RootState) => state.books;
export const selectLoading = (state: RootState) => state.loading;
export const selectLoadingMore = (state: RootState) => state.loadingMore;
export const selectTotalCount = (state: RootState) => state.totalCount;
export const selectFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.sort;
export const selectSearchPhrase = (state: RootState) => state.searchPhrase;
export const selectCurrentBook = (state: RootState) => state.currentBook;

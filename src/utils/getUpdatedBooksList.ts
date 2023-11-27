import { BookType } from "../store/reducer";

type OptionsType = {
  filter: string,
  search: string,
  sort: string,
}

export const getUpdatedBooksList = (booksList: BookType[], options: OptionsType) => {
  let copyBooks = [...booksList];

  if (options.search) {
    copyBooks = copyBooks.filter(book => book.volumeInfo.title.toLowerCase().trim()
      .includes(options.search.toLowerCase().trim()))
  }

  if (options.sort === 'newest') {
    copyBooks.sort((a, b) => (
      Number(new Date(a.volumeInfo.publishedDate)) - Number(new Date(b.volumeInfo.publishedDate))
    ))
  }

  if (options.filter && options.filter !== 'all') {
    copyBooks = copyBooks
        .filter(book => book.volumeInfo.categories && book.volumeInfo.categories[0] === options.filter);
  }

  return copyBooks;
}
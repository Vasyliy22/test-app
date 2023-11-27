import { FC, MouseEventHandler } from 'react';
import { ImageLink } from '../../types/ImageLink';
import './BooksList.scss';

type Props = {
  title: string,
  categories: string[],
  authors: string[],
  imageLinks: ImageLink,
  id: string,
  onClick: MouseEventHandler<HTMLDivElement>,
}

const BooksList: FC<Props> = ({ title, categories, authors, imageLinks, onClick, id }) => {
  return (
    <li className="list__item">
      <div className="card" onClick={onClick}>
        <img className='card__image' src={imageLinks?.smallThumbnail} alt={title} />
        <div className="card__content">
          <span className="card__category">
            {categories && categories.length ? categories[0] : ''}
          </span>
          <p className="card__title">{title}</p>
          <p className="card__author">{authors}</p>
        </div>
      </div>
    </li>
  )
}

export default BooksList
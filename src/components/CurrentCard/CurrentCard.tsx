import { useEffect } from 'react';
import './CurrentCard.scss';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loadCurrentBookThunk } from '../../store/thunks';
import { selectCurrentBook, selectLoading } from '../../store/selectors';
import { Loader } from '../Loader';
import { clearCurrentBook } from '../../store/actions';

const CurrentCard = () => {
  const dispatch = useAppDispatch();
  const { bookId } = useParams();
  const currentBook = useAppSelector(selectCurrentBook);
  const loading = useAppSelector(selectLoading);

  useEffect(() => {
    dispatch(loadCurrentBookThunk(bookId as string));
  }, [bookId, dispatch]);

  useEffect(() => () => {
    dispatch(clearCurrentBook());
  }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <div className="card card--current-book">
        <div className="book-img">
          <img
            className='card__image card__image--current-image'
            src={currentBook?.volumeInfo?.imageLinks?.thumbnail}
            alt={currentBook?.volumeInfo?.title}
          />
        </div>
        
        <div className="card__content card__content--current-book">
          <p 
            className="card__category">
              {currentBook?.volumeInfo?.categories}
          </p>
          <p 
            className="card__title">
              {currentBook?.volumeInfo?.title}
          </p>
          <p
            className="card__author">
              {currentBook?.volumeInfo?.authors}
          </p>
          <div className="description">
            <p
              className="card__desc">
                {currentBook?.volumeInfo?.description}
            </p>
          </div>
          
        </div>
      </div>
  )
}

export default CurrentCard;

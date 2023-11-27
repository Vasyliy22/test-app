import { FC } from 'react';
import './LoadMore.scss';

type Props = {
  handleLoadMore: () => void;
}

const LoadMore: FC<Props> = ({ handleLoadMore }) => {
  return (
    <button
      type='button'
      className='action__load'
      onClick={handleLoadMore}
      >
        Load more
    </button>
  )
}

export default LoadMore;

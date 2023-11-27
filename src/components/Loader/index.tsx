import React from 'react';
import './styles.scss';
import Spinner from '../Spinner';

export const Loader = () => (
  <div className='loader'>
    <div className="loader__spinner">
      <Spinner />
    </div>
  </div>
)
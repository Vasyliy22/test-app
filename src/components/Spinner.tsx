import React from 'react';
import { Oval } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <Oval
      height={30}
      width={30}
      color="gray"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="#gray"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  )
}

export default Spinner;
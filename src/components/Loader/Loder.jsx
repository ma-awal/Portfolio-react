import React from 'react';
import { Loader } from '@mantine/core';
const Loder = () => {
  return (
    <div
      style={{ background: '#FFFFFF', zIndex: 100 }}
      className="d-flex justify-content-center align-items-center  
   bg-white position-fixed top-0 start-0 end-0 bottom-0 w-100 h-100"
    >
      <Loader />
    </div>
  );
};

export default Loder;

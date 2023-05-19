// Loader.js
import React, { useState, useEffect } from 'react';
import Loder from '../Loader/Loder';

const Loading = ({ loading, setLoading }) => {
  useEffect(() => {
    if (loading) {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [loading, setLoading]);

  return loading && <Loder />;
};

export default Loading;

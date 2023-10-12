import React from 'react';
import { useLoaderData } from 'react-router-dom';
const Github = () => {
  const data = useLoaderData(); // Assuming gitinfo returns a Promise

  return (
    <div className='text-center text-3xl bg-red-400 text-white'>
      Github followers: {data.followers}
    </div>
  );
};

export default Github;

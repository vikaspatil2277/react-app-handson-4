import React, { useEffect, useState } from 'react'

function Home() {

  const [message, setMessage] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('click on student for details');
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <h1 className='homemsg'>{message}</h1>
    </div>
  );
};

export default Home
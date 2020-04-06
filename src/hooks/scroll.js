import { useState, useEffect } from 'react';

export default () => {
  const [down, setDown] = useState(false);

  const handleScroll = () => {
    if(window.scrollY > 30) {
      setDown(true);
    } else {
      setDown(false);
    }
  }

  useEffect(()=> {
    window.addEventListener('scroll', handleScroll);
    return ()=> window.removeEventListener('scroll', handleScroll);
  });
  return down;
};

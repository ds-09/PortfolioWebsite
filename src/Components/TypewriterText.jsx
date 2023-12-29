import React, { useState, useEffect } from 'react';

const TypewriterText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prevText) => prevText + text[index]);
      index += 1;

      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the speed of the typewriter effect by changing the interval
    return () => clearInterval(intervalId);
  }, [text]);

  return <span>{displayedText}</span>;
};

export default TypewriterText;

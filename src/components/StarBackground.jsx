
import React, { useEffect, useState } from 'react';

// id, size, position x and y, opacity, and animation duration
// id, size, position x and y, delay, and animation duration
export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
        generateStars();

    }    // Regenerate stars and meteors on window resize

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        // Cleanup the event listener on component unmount
    }
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
  

  const newStars = [];

  for (let i = 0; i < numberOfStars; i++) {
    newStars.push({
      id: i,
      size: Math.random() * 3 + 1, // Random size between 1 and 3
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5,
      animationDuration: Math.random() * 4 + 2, // Random duration between 2 and 4 seconds
    });
    setStars(newStars);
    };
  }

   const generateMeteors = () => {
    const numberOfMeteors = 4;
  const newMeteors = [];

  for (let i = 0; i < numberOfMeteors; i++) {
    newMeteors.push({
      id: i,
      size: Math.random() * 2 + 1, // Random size between 1 and 3
      x: Math.random() * 100,
      y: Math.random() * 20, // Start from the top of the screen
      delay: Math.random() * 15,
      animationDuration: Math.random() * 3 + 3, // Random duration between 2 and 4 seconds
    });
    setMeteors(newMeteors);
    };
  }
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div key={star.id} className="star animate-pulse-subtle" style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",

        }}/>
      ))}

       {meteors.map((meteor) => (
        <div key={meteor.id} className="meteor animate-meteor" style={{
            width: meteor.size  * 20 + "px",
            height: meteor.size * 1 +  "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            delay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",

        }}/>
      ))}
    </div>
  );
};

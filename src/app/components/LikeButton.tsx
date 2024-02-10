'use client'

import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLikeClick = () => {
    setLikes((prevLikes) => prevLikes + 1);
    setIsLiked(true);

    // Add any additional logic or send a request to your backend to handle the like
  };

  return (
    <button
      className={`flex items-center space-x-2 px-4 py-2 rounded-xl hover:outline hover:outline-offset-8 hover:outline-none lg:hover:outline-white transition duration-700 ease-in-out ${
        isLiked ? 'bg-white/90 text-black animate-pulse' : 'bg-[#121212] outline outline-white/80 text-white animate-pulse' // not selected
      }`}
      onClick={handleLikeClick}
    >
      <svg
        className="w-6 h-6"
        fill={isLiked ? 'currentColor' : 'none'}
        stroke={isLiked ? 'none' : 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C14.09 3.81 15.76 3 17.5 3 20.58 3 23 5.42 23 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      <span>{likes}</span>
    </button>
  );
};

export default LikeButton;

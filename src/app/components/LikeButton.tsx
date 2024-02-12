"use client";
import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

const LikeButton = () => {
  const [likes, setLikes] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    // Fetch the initial likes value from the database
    fetch("/api/getLikes")
      .then((response) => response.json())
      .then((data) => setLikes(data.likes))
      .catch((error) => console.error("Error fetching likes:", error));
  }, []);

  const handleLikeClick = () => {
    if (typeof window !== "undefined") {
      const isLikedInSession =
        window?.sessionStorage.getItem("isLiked") === "true";

      if (isButtonDisabled) {
        return; // Don't perform the action if the button is already disabled
      }

      // Check if the user has not yet clicked the like button
      if (!isLikedInSession) {
        setLikes((prevLikes) => prevLikes + 1);
        setIsLiked(true);

        // Mark that the user has liked during this session and disable the button
        window.sessionStorage.setItem("isLiked", "true");
        setIsButtonDisabled(true);

        fetch("/api/updateLikes", {
          method: "PATCH",
          body: JSON.stringify({ likes: likes + 1 }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => setLikes(data.likes))
          .catch((error) => console.error("Error updating likes:", error));
      }
    }
  };

  return (
    <button
      className={`flex items-center space-x-2 px-4 py-2 rounded-xl hover:outline hover:outline-offset-8 hover:outline-none lg:hover:outline-white transition duration-700 ease-in-out ${
        isLiked
          ? "bg-white/90 text-fuchsia-500"
          : "bg-[#121212] outline outline-white/80 text-white animate-pulse" // not clicked
      }`}
      disabled={isButtonDisabled}
      onClick={handleLikeClick}
    >
      <svg
        className="w-6 h-6"
        fill={isLiked ? "currentColor" : "none"}
        stroke={isLiked ? "none" : "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C14.09 3.81 15.76 3 17.5 3 20.58 3 23 5.42 23 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      <span>
        <CountUp start={0} end={likes} duration={1} />
      </span>
      {/* <span>{likes}</span> */}
    </button>
  );
};

export default LikeButton;

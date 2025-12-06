// File: UserCard.jsx
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * A simple frontend component to display user information.
 */
function UserCard({ userName, initialLikes }) {
  // State variable
  const [likes, setLikes] = useState(initialLikes);

  // Hook example: run on mount
  useEffect(() => {
    console.log(`UserCard mounted for ${userName}`);
  }, [userName]);

  // Handler function
  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="user-card">
      <h2>{userName}</h2>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>
    </div>
  );
}

// Props validation
UserCard.propTypes = {
  userName: PropTypes.string.isRequired,
  initialLikes: PropTypes.number,
};

export default UserCard;

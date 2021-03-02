import React from 'react';

const CommentIndexItem = ({ comment }) => {
  return (
    <li className="comment">
      <small>"{comment.text}"</small>
      <strong>- {comment.author}</strong>
    </li>
  );
};

export default CommentIndexItem;
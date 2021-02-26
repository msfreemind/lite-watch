import React from 'react';

const CommentIndexItem = ({ comment }) => {
  return (
    <li>
      "{comment.text}"
      <br/>
      - {comment.author}
    </li>
  );
};

export default CommentIndexItem;
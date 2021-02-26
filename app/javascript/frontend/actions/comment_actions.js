import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

// sync action creators

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

// async action creators

export const createComment = comment => dispatch => {
  return APIUtil.postComment(comment).then(
    comment => dispatch(receiveComment(comment))
  );
};

export const destroyComment = commentId => dispatch => {
  return APIUtil.deleteComment(commentId).then(
    comment => dispatch(removeComment(comment))
  );
};
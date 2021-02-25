import * as APIUtil from '../util/reaction_api_util';

export const RECEIVE_REACTION = "RECEIVE_REACTION";
export const REMOVE_REACTION = "REMOVE_REACTION";

// sync action creators

export const receiveReaction = reaction => ({
  type: RECEIVE_REACTION,
  reaction
});

export const removeReaction = reaction => ({
  type: REMOVE_REACTION,
  reaction
});

// async action creators

export const createReaction = reaction => dispatch => {
  return APIUtil.postReaction(reaction).then(
    reaction => dispatch(receiveReaction(reaction))
  );
};

export const destroyReaction = reaction => dispatch => {
  return APIUtil.postReaction(reaction).then(
    reaction => dispatch(removeReaction(reaction))
  );
};
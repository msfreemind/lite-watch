export const allVideos = state => {
  return Object.values(state.entities.videos);
};

export const userReaction = (state, videoId) => {
  const currentUserId = state.session.id;
  const reactions = Object.values(state.entities.reactions);
  let result = null

  // Get existing reaction for the current user on the specified video
  reactions.forEach(reaction => {
    if (reaction.videoId === videoId && reaction.userId === currentUserId) {
      result = reaction;
    }
  })

  return result;
};
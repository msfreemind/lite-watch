import { connect } from 'react-redux';
import { createReaction } from '../../actions/reaction_actions';
import { createComment } from '../../actions/comment_actions';
import { fetchVideo, updateVideo } from '../../actions/video_actions';
import { userReaction } from '../../reducers/selectors';
import VideoShow from './video_show.jsx';

const mapStateToProps = (state, ownProps) => ({
  video: state.entities.videos[ownProps.match.params.videoId],
  reaction: userReaction(state, parseInt(ownProps.match.params.videoId)),
  comments: Object.values(state.entities.comments),
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  fetchVideo: videoId => dispatch(fetchVideo(videoId)),
  createReaction: reaction => dispatch(createReaction(reaction)),
  createComment: comment => dispatch(createComment(comment)),
  updateVideo: (videoId, video) => dispatch(updateVideo(videoId, video))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);
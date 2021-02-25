import { connect } from 'react-redux';
import { createReaction, destroyReaction } from '../../actions/reaction_actions';
import { fetchVideo } from '../../actions/video_actions'
import { userReaction } from '../../reducers/selectors'
import VideoShow from './video_show.jsx';

const mapStateToProps = (state, ownProps) => ({
  video: state.entities.videos[ownProps.match.params.videoId],
  reaction: userReaction(state, parseInt(ownProps.match.params.videoId)),
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  fetchVideo: videoId => dispatch(fetchVideo(videoId)),
  createReaction: reaction => dispatch(createReaction(reaction)),
  destroyReaction: reactionId => dispatch(destroyReaction(reactionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);
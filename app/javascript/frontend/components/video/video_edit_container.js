import { connect } from 'react-redux';
import { fetchVideo, updateVideo, destroyVideo } from '../../actions/video_actions'
import VideoEdit from './video_edit.jsx';

const mapStateToProps = (state, ownProps) => ({
  video: state.entities.videos[ownProps.match.params.videoId],
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  fetchVideo: videoId => dispatch(fetchVideo(videoId)),
  updateVideo: (videoId, video) => dispatch(updateVideo(videoId, video)),
  destroyVideo: videoId => dispatch(destroyVideo(videoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoEdit);
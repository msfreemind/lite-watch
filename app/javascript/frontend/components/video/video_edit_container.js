import { connect } from 'react-redux';
import { fetchVideo, updateVideo } from '../../actions/video_actions'
import VideoEdit from './video_edit.jsx';

const mapStateToProps = (state, ownProps) => ({
  video: state.entities.videos[ownProps.match.params.videoId]
});

const mapDispatchToProps = dispatch => ({
  fetchVideo: videoId => dispatch(fetchVideo(videoId)),
  updateVideo: (videoId, video) => dispatch(updateVideo(videoId, video))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoEdit);
import { connect } from 'react-redux';
import VideoShow from './video_show.jsx';

const mapStateToProps = (state, ownProps) => ({
  video: state.entities.videos[ownProps.match.params.videoId]
});

export default connect(mapStateToProps, null)(VideoShow);
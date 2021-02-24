import { connect } from 'react-redux';
import { createVideo } from '../../actions/video_actions';
import VideoSubmit from './video_submit.jsx';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  createVideo: video => dispatch(createVideo(video))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoSubmit);
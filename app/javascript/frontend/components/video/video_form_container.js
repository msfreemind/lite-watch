import { connect } from 'react-redux';
import { createVideo } from '../../actions/video_actions';
import VideoForm from './video_form.jsx';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  createVideo: bench => dispatch(createVideo(bench))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoForm);
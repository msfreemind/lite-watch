import { connect } from 'react-redux';
import Search from './search.jsx'
import { allVideos } from '../../reducers/selectors'
import { fetchVideos } from '../../actions/video_actions.js';

const mapStateToProps = state => ({
  videos: allVideos(state)
});

const mapDispatchToProps = dispatch => ({
  fetchVideos: filters => dispatch(fetchVideos(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
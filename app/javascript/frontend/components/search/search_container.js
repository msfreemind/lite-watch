import { connect } from 'react-redux';
import Search from './search.jsx'
import { allVideos } from '../../reducers/selectors'
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  videos: allVideos(state)
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
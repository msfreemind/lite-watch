import { connect } from 'react-redux';
import { flushErrors, signup } from '../../actions/session_actions';
import SessionForm from './session_form.jsx'

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: 'signup'
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  flushErrors: () => dispatch(flushErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
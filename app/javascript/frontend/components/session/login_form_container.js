import { connect } from 'react-redux';
import { flushErrors, login } from '../../actions/session_actions';
import SessionForm from './session_form.jsx'

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: 'login'
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  flushErrors: () => dispatch(flushErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
import { connect } from 'react-redux';

import PasswordRecovery from '../components/PasswordRecovery';
import { submit } from '../modules/passwordRecovery';

const mapDispatchToProps = {
  submit,
}

const mapStateToProps = (state) => ({
  state: state.passwordRecovery,
})

export default connect(mapStateToProps, mapDispatchToProps)(PasswordRecovery);

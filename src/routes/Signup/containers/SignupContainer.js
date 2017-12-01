import { connect } from 'react-redux';

import Signup from '../components/Signup';
import { submit } from '../modules/signup';

const mapDispatchToProps = {
  submit,
}

const mapStateToProps = (state) => ({
  state: state.signup,
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)

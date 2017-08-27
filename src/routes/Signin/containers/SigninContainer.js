import { connect } from 'react-redux';

import Signin from '../components/Signin';
import { submit } from '../modules/signin';

const mapDispatchToProps = {
  submit,
}

const mapStateToProps = (state) => ({
  state: state.signin
})

export default connect(mapStateToProps, mapDispatchToProps)(Signin)

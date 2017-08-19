import { connect } from 'react-redux';
import { submit, doubleAsync } from '../modules/signin';

import Signin from '../components/Signin';

const mapDispatchToProps = {
  submit,
}

const mapStateToProps = (state) => ({
  state : state.signin
})

export default connect(mapStateToProps, mapDispatchToProps)(Signin)

import { connect } from 'react-redux';

import Account from '../components/Account';
import { submit } from '../modules/account';

const mapDispatchToProps = {
  submit,
}

const mapStateToProps = (state) => ({
  user: state.account,
})

export default connect(mapStateToProps, mapDispatchToProps)(Account);

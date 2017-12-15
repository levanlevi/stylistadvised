import { connect } from 'react-redux';

import Account from '../components/Account';
import { getUser } from '../modules/account';
import { submit } from '../modules/account';

const mapDispatchToProps = {
  getUser,
  submit,
}

const mapStateToProps = (state) => ({
  loading: state.account.loading,
  user: state.account.user,
})

export default connect(mapStateToProps, mapDispatchToProps)(Account);

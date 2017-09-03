import { connect } from 'react-redux';

import Search from '../components/Search';
import { submit } from '../modules/search';

const mapDispatchToProps = {
  submit,
}

const mapStateToProps = (state) => ({
  state: state.account
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)

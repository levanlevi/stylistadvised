import { connect } from 'react-redux';

import Search from '../components/Search';

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({
  users: state.search.users,
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);

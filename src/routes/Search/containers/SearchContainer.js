import { connect } from 'react-redux';

import Search from '../components/Search';
import { getUsers } from '../modules/search';
import { setChannel } from '../modules/search';

const mapDispatchToProps = {
  getUsers,
  setChannel,
}

const mapStateToProps = (state) => ({
  loading: state.search.loading,
  count: state.search.count,
  itemsOnPage: state.search.itemsOnPage,
  users: state.search.users,
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);

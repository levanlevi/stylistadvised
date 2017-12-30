import { connect } from 'react-redux';

import Search from '../components/Search';
import { getUsers } from '../modules/search';
import { setChannel } from '../modules/search';
import { setMessage } from '../modules/search';

const mapDispatchToProps = {
  getUsers,
  setChannel,
  setMessage,
}

const mapStateToProps = (state) => ({
  loading: state.search.loading,
  count: state.search.count,
  itemsOnPage: state.search.itemsOnPage,
  channel: state.search.channel,
  users: state.search.users,
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);

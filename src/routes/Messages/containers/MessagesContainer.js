import { connect } from 'react-redux';

import Messages from '../components/Messages';

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({
  messages: state.messages,
})

export default connect(mapStateToProps, mapDispatchToProps)(Messages);

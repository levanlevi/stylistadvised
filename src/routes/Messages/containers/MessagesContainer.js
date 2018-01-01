import { connect } from 'react-redux';

import Messages from '../components/Messages';
import { getChannelsForUser } from '../modules/messages';
import { getMessagesForChannel } from '../modules/messages';

const mapDispatchToProps = {
  getChannelsForUser,
  getMessagesForChannel,
}

const mapStateToProps = (state) => ({
  channelsLoading: state.messages.channelsLoading,
  messagesLoading: state.messages.messagesLoading,
  channels: state.messages.channels,
  messages: state.messages.messages,
})

export default connect(mapStateToProps, mapDispatchToProps)(Messages);

import MessageInbox from '../components/MessageInbox'
import MessageWindow from '../components/MessageWindow'

const privateMessages = () => {
  return (
    <div>
      <section className="left-info-section">
        <MessageInbox />
      </section>
      <section className="right-chat-section">
        <MessageWindow />
      </section>
    </div>
  )
}

export default privateMessages

import OnlineUserList from "../components/OnlineUserList";
import ChatWindow from "../components/ChatWindow";

const publicChatroom = () => {
  return (
    <div>
      <section className="left-info-section">
        <OnlineUserList />
      </section>
      <section className="right-chat-section">
        <ChatWindow />
      </section>
    </div>
  );
};

export default publicChatroom;

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const ChatWindow = () => {
  const dummyData = [{}];
  const [publicMessage, setPublicMessage] = useState([]);
  const fetchPublicMessage = () => {
    setPublicMessage(dummyData);
  };
  const scrollToBottom = () => {
    console.log('scrollToBottom');
    const scrollbar = document.querySelector('.chatroom__message');
    const scrollHeight = scrollbar.scrollHeight;
    const height = scrollbar.clientHeight;
    const maxScrollTop = scrollHeight - height;
    console.log('scrollheight:', scrollHeight);
    console.log('height:', height);
    console.log('maxScrollTop:', maxScrollTop);
    scrollbar.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    console.log(scrollbar.scrollTop);
  };
  useEffect(() => {
    scrollToBottom();
  }, []);
  return (
    <div className="chatroom">
      <div className="chatroom__title">
        <h1 className="chatroom__title__text font__chatroom__title">
          公開聊天室
        </h1>
      </div>

      <div className="chatroom__container">
        <div className="chatroom__message">
          <div className="chatroom__message__info">
            <div className="info-text">David 上線</div>
          </div>

          <div className="chatroom__message__receive">
            <div className="avatar"></div>
            <div className="wrapper">
              <div className="message">今天吃甚麼?</div>
              <span className="time">下午6:00</span>
            </div>
          </div>
          <div className="chatroom__message__receive">
            <div className="avatar"></div>
            <div className="wrapper">
              <div className="message">吃BBQ</div>
              <span className="time">下午6:02</span>
            </div>
          </div>
          <div className="chatroom__message__receive">
            <div className="avatar"></div>
            <div className="wrapper">
              <div className="message">今天吃甚麼?</div>
              <span className="time">下午6:00</span>
            </div>
          </div>
          <div className="chatroom__message__receive">
            <div className="avatar"></div>
            <div className="wrapper">
              <div className="message">吃BBQ</div>
              <span className="time">下午6:02</span>
            </div>
          </div>
          <div className="chatroom__message__receive">
            <div className="avatar"></div>
            <div className="wrapper">
              <div className="message">今天吃甚麼?</div>
              <span className="time">下午6:00</span>
            </div>
          </div>
          <div className="chatroom__message__receive">
            <div className="avatar"></div>
            <div className="wrapper">
              <div className="message">吃BBQ</div>
              <span className="time">下午6:02</span>
            </div>
          </div>
          <div className="chatroom__message__receive">
            <div className="avatar"></div>
            <div className="wrapper">
              <div className="message">今天吃甚麼?</div>
              <span className="time">下午6:00</span>
            </div>
          </div>
          <div className="chatroom__message__receive">
            <div className="avatar"></div>
            <div className="wrapper">
              <div className="message">吃BBQ</div>
              <span className="time">下午6:02</span>
            </div>
          </div>
          <div className="chatroom__message__receive">
            <div className="avatar"></div>
            <div className="wrapper">
              <div className="message">今天吃甚麼?</div>
              <span className="time">下午6:00</span>
            </div>
          </div>
          <div className="chatroom__message__receive">
            <div className="avatar"></div>
            <div className="wrapper">
              <div className="message">吃BBQ</div>
              <span className="time">下午6:02</span>
            </div>
          </div>

          <div className="chatroom__message__send">
            <div className="wrapper">
              <div className="message">好耶~~</div>
              <span className="time">下午6:03</span>
            </div>
          </div>
        </div>

        <div className="chatroom__launch">
          <form action="" className="chatroom__launch__form">
            <input
              type="text"
              className="chatroom__launch__form__input"
              placeholder="輸入訊息 ..."
            />
            <button
              type="submit"
              className="chatroom__launch__form__send-btn"
            ></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;

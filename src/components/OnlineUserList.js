import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const OnlineUserList = () => {
  let data = [
    { id: '2', name: 'Apple Orange', account: 'apple1335', avatar: '' },
    { id: '4', name: 'Apple Banana', account: 'apple1775', avatar: '' },
  ];
  let [onlineUserData, setOnlineUserData] = useState([]);
  const fetchOnlineUser = () => {
    // to do get online user api
    setOnlineUserData(data);
  };
  useEffect(() => {
    fetchOnlineUser();
  }, []);

  return (
    <div className="list">
      <div className="list__title">
        <h1 className="list__title__text font__user-list__title">
          上線使用者 ({onlineUserData.length})
        </h1>
      </div>

      <div className="list__users">
        {onlineUserData.map((user) => (
          <div className="list__users__card" key={user.id}>
            <div className="avatar">{user.avatar}</div>
            <h3 className="name font__user-list__name">{user.name}</h3>
            <h3 className="account font__user-list__account">
              @{user.account}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineUserList;

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const OnlineUserList = () => {
  let data = [
    { id: "2", name: "Apple Orange", account: "apple1335", avatar: "" },
    { id: "4", name: "Apple Banana", account: "apple1775", avatar: "" },
  ];
  let [onlineUserData, setOnlineUserData] = useState(data);

  return (
    <div className="list">
      <div className="list__title">
        <h1 className="list__title__text font__black__18__700">
          上線使用者 ({onlineUserData.length})
        </h1>
      </div>

      <div className="list__users">
        {onlineUserData.map((user) => (
          <div className="list__users__card">
            <div className="avatar">{user.avatar}</div>
            <h3 className="name font__black__15__700">{user.name}</h3>
            <h3 className="account font__gray__15__500">@{user.account}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineUserList;

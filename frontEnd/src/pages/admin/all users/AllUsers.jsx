import React, { useState } from "react";
import { List } from "./user";

const AllUsers = () => {
  const [user, setUser] = useState([]);

  React.useEffect(() => {
    const callData = async () => {
      const call = await fetch("api/user/get-all-user");
      const dataJson = await call.json();
      if (call.status === 200) {
        setUser(dataJson.data);
        console.log(dataJson);
      }
    };
    callData();
  }, []);
  console.log(user);
  return (
    <List>
      <div class="list-group">
        <button
          type="button"
          class="list-group-item list-group-item-action active"
          aria-current="true"
        >
          Application Users
        </button>
        {user.map((data, key) => {
          return (
            <button
              key={key}
              type="button"
              class="list-group-item list-group-item-action"
            >
              {data.displayName}
            </button>
          );
        })}
      </div>
    </List>
  );
};

export default AllUsers;

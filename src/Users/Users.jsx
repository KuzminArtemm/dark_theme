import { useContext, useEffect, useState } from "react";
import UserItem from "./UserItem/UserItem";
import axios from "axios";
import "./users.css";
import { userContext } from "../App";

const Users = () => {
  const { theme } = useContext(userContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const result = await axios({
        method: "get",
        url: "https://api.github.com/users",
      });
      console.log({ result });
      setUsers(
        result.data.map((raw) => ({
          id: raw.id,
          login: raw.login,
          avatarUrl: raw.avatar_url,
        }))
      );
    };
    fetch();
  }, []);
  return (
    <div className={`users users_${theme}`}>
      <div className="users__title">
        <h2>Пользователи</h2>
      </div>
      <div className="users__content">
        {users.map((user) => (
          <UserItem key={user.login} theme={theme} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;

import "./item.css";

const UserItem = ({ user }) => {
  return (
    <div className="conteiner">
      <div
        className="avatar"
        style={{ backgroundImage: `url(${user.avatarUrl})` }}
      />
      <div className="login">
        {user.login[0].toUpperCase() + user.login.substring(1)}
      </div>
    </div>
  );
};

export default UserItem;

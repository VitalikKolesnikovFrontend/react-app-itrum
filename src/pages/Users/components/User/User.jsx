import "./User.scss";
const User = ({ user }) => {
  return (
    <div className="user">
      <span>
        {user.name} {user.lastName}
      </span>
      <span>{user.email}</span>
      <span>{user.phone}</span>
    </div>
  );
};

export default User;

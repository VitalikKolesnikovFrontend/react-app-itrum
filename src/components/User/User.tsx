import styles from "./User.module.scss";

const User = ({ user }) => {
  return (
    <div className={styles.user}>
      <span className={styles.userItems}>
        {user.name} {user.lastName}
      </span>
      <span className={styles.userItems}>{user.email}</span>
      <span className={styles.userItems}>{user.phone}</span>
    </div>
  );
};

export default User;

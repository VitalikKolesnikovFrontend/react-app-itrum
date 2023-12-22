import User from "../User/User";
import styles from "./UserList.module.scss";

const UserList = ({ userInfo, displayPosts }) => {
  return (
    <div className={styles.posts__user}>
      {displayPosts.map((item) => (
        <User user={item} userInfo={userInfo} key={item.phone} />
      ))}
    </div>
  );
};
export default UserList;

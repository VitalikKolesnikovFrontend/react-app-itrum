import User from "../User/User";
import styles from "./UserList.module.scss";

const UserList = ({ userInfo, displayPosts, page, changePage }) => {
  if (displayPosts.length > 0) {
    return (
      <div className={styles.posts__user}>
        {displayPosts.map((item) => (
          <User user={item} userInfo={userInfo} key={item.phone} />
        ))}
      </div>
    );
  } else {
    if (page > 1) {
      return changePage(+page - 1);
    }
  }
};
export default UserList;

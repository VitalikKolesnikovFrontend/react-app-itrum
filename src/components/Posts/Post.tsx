// import { useState } from "react";
import styles from "./Post.module.scss";

const Post = ({ post }) => {
  return (
    <div className={styles.posts}>
      <span title={`${post.categories}`}>{post.categories}</span>
      <span className={styles.post}>{post.subcategory}</span>
      <span title={`${post.brand}`} className={styles.post}>
        {post.brand !== null ? post.brand : "-"}
      </span>
      <span title={`${post.items}`} className={styles.post}>
        {post.items !== null ? post.items : "-"}
      </span>
      <span className={styles.post}>{post.cashback}%</span>
    </div>
  );
};

export default Post;

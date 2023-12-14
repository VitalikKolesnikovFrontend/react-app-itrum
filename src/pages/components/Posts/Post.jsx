// import { useState } from "react";
import "./Post.scss";

const Post = ({ post }) => {
  // const [productChecked, setProductChecked] = useState(false);

  // const checkboxHandler = () => {
  //   setProductChecked(!productChecked);
  //   if (productChecked === false) {
  //     addCheckedPost(post);
  //   } else {
  //     removeCheckedPost(post);
  //   }
  // };

  return (
    <div className="posts">
      <span title={`${post.categories}`}>{post.categories}</span>
      <span className="post">{post.subcategory}</span>
      <span title={`${post.brand}`} className="post">
        {post.brand !== null ? post.brand : "-"}
      </span>
      <span title={`${post.items}`} className="post">
        {post.items !== null ? post.items : "-"}
      </span>
      <span className="post">{post.cashback}%</span>
    </div>
  );
};

export default Post;

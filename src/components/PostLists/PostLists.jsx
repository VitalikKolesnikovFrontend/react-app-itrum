import Post from "../Posts/Post";
import "./PostList.scss";
const PostLists = ({
  displayPosts,
  onChangeHandler,
  checkedPosts,
  page,
  changePage,
}) => {
  if (displayPosts.length > 0) {
    return (
      <div className="posts__products">
        {displayPosts.map((item) => (
          <div className="postList" key={item.id}>
            <input
              onChange={onChangeHandler}
              checked={checkedPosts.includes(item)}
              data-id={item.id}
              id={item}
              value={item.id}
              className="input__post"
              type="checkbox"
            />
            <Post key={item.id} post={item} />
          </div>
        ))}
      </div>
    );
  } else {
    if (page > 1) {
      return changePage(+page - 1);
    }
    console.log(page);
    // const prevPage = (e) => {
    //   e.preventDefault();
    //   if (page > 1) {
    //     changePage(+page - 1);
    //   }
    // };
    // return <h1>Товары не найдены</h1>;
  }
};

export default PostLists;

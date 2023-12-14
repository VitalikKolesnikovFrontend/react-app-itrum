/* eslint-disable no-unused-vars */
import Button from "../components/Button/Button";
import MenuItems from "../components/MenuItems/MenuItems";
import Search from "../components/Search/Search";
import Post from "../components/Posts/Post";
import ModalDelete from "../components/ModalDelete/ModalDelete";
import productsList from "../Products/ProductsList";
import "./Products.scss";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import PostForm from "../components/PostForm/PostForm";
import PostLists from "../components/PostLists/PostLists";

const Products = () => {
  const [posts, setPosts] = useState([...productsList]);
  const [modalOpen, setOpenModal] = useState(false);
  const [checkedPosts, setCheckedPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(3);

  const changePage = (page) => {
    setPage(page);
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setOpenModal(false);
  };

  const removeCheckedPosts = (postsRemove) => {
    setPosts(posts.filter((i) => !postsRemove.includes(i)));
    setCheckedPosts([]);
  };

  const closeModal = (e) => {
    if (e.keyCode === 27) {
      setOpenModal(false);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", closeModal);
    return () => {
      document.addEventListener("keydown", closeModal);
    };
  }, []);

  const onChangeHandler = (e) => {
    const ischecked = e.target.checked;
    const dataid = e.target.dataset.id;
    if (dataid === "checkall") {
      if (ischecked) {
        setCheckedPosts(posts);
      } else {
        setCheckedPosts([]);
      }
    } else {
      if (ischecked) {
        const newItem = posts.filter((post) => {
          return post.id == dataid;
        })[0];
        setCheckedPosts([...checkedPosts, newItem]);
      } else {
        const resultFilter = checkedPosts.filter((i) => i.id != dataid);
        setCheckedPosts(resultFilter);
      }
    }
  };

  const displayPosts = posts.slice((page - 1) * limit, page * limit);
  return (
    <>
      <Modal setVisible={setOpenModal} visible={modalOpen}>
        <PostForm create={createPost} setVisible={setOpenModal} />
      </Modal>
      <Search
        page={page}
        limit={limit}
        setLimit={setLimit}
        setPage={setPage}
        changePage={changePage}
        totalPages={totalPages}
        posts={posts}
      />
      <Button onClick={() => setOpenModal(true)}>Добавить акцию</Button>
      <MenuItems
        checkedPosts={checkedPosts}
        posts={posts}
        onChangeHandler={onChangeHandler}
      />
      <PostLists
        page={page}
        changePage={changePage}
        displayPosts={displayPosts}
        checkedPosts={checkedPosts}
        onChangeHandler={onChangeHandler}
      />
      {checkedPosts.length > 0 && (
        <ModalDelete
          setCheckedPosts={setCheckedPosts}
          remove={removeCheckedPosts}
          checkedPosts={checkedPosts}
        />
      )}
    </>
  );
};

export default Products;

// const addCheckedPost = (post) => {
//   setCheckedPosts([...checkedPosts, post]);
// };
// const removeCheckedPost = (post) => {
//   setCheckedPosts(checkedPosts.filter((i) => i.id !== post.id));
// };

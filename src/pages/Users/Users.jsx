import { useEffect, useState } from "react";
import TitleUser from "../../components/TitleUser/TitleUser";
import usersList from "./UsersList";
import SearchUser from "../../components/SearchUser/SearchUser";
import Search from "../../components/Search/Search";
import UserList from "../../components/UserList/UserList";

const Users = () => {
  const [userInfo] = useState([...usersList]);
  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPage, setTotalPage] = useState(userInfo);

  const changePage = (page) => {
    setPage(page);
  };
  // const filteredUsers = userInfo.filter((user) => {
  //   return user.name.toLowerCase().includes(searchValue.toLowerCase());

  const filteredUsers = userInfo.filter((user) =>
    user.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  const displayPosts = filteredUsers.slice((page - 1) * limit, page * limit);

  useEffect(() => {
    setTotalPage(filteredUsers);
  }, [filteredUsers]);

  return (
    <div className="users">
      <SearchUser
        inputValue={inputValue}
        setInputValue={setInputValue}
        setSearchValue={setSearchValue}
      />
      <Search
        changePage={changePage}
        page={page}
        limit={limit}
        setLimit={setLimit}
        setPage={setPage}
        userInfo={userInfo}
        totalPage={totalPage}
      />
      <TitleUser />
      <UserList
        displayPosts={displayPosts}
        userInfo={userInfo}
        filteredUsers={filteredUsers}
      />
    </div>
  );
};

export default Users;

import { useState } from "react";
import TitleUser from "../../components/TitleUser/TitleUser";
import User from "../../components/User/User";
import usersList from "./UsersList";
import SearchUser from "../../components/SearchUser/SearchUser";
import "./Users.scss";
import Pagination from "../../components/Pagination/Pagination";

const Users = () => {
  const [userInfo] = useState([...usersList]);
  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const changePage = (page) => {
    setPage(page);
  };

  // const filteredUsers = userInfo.filter((user) => {
  //   return user.name.toLowerCase().includes(searchValue.toLowerCase());
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const filteredUsers = userInfo
    .filter((user) =>
      user.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    .slice(startIndex, endIndex);

  return (
    <div className="users">
      <SearchUser
        inputValue={inputValue}
        setInputValue={setInputValue}
        setSearchValue={setSearchValue}
      />
      <Pagination
        changePage={changePage}
        page={page}
        setPage={setPage}
        limit={limit}
        setLimit={setLimit}
        userInfo={userInfo}
      />
      <TitleUser />
      <div className="posts__user">
        {filteredUsers.map((item) => (
          <User user={item} userInfo={userInfo} key={item.phone} />
        ))}
      </div>

      {/* <User userInfo={userInfo} /> */}
    </div>
  );
};

export default Users;

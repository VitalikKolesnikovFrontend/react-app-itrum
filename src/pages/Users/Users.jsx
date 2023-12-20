import { useState } from "react";
import Search from "../../components/Search/Search";
import TitleUser from "../../components/TitleUser/TitleUser";
import User from "../../components/User/User";
import usersList from "./UsersList";
import SearchUser from "../../components/SearchUser/SearchUser";
import "./Users.scss";

const Users = () => {
  const [userInfo] = useState([...usersList]);
  const [searchValue, setSearchValue] = useState("");

  const filteredUsers = userInfo.filter((user) => {
    return user.name.toLowerCase().includes(searchValue.toLowerCase());
  });
  console.log(filteredUsers.length);
  return (
    <div className="users">
      <SearchUser setSearchValue={setSearchValue} />
      <Search />
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

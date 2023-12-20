import "./SearchUser.scss";
import IconSearch from "../../assets/Icons/en-searsh.svg?react";
import IconDelete from "../../assets/Icons/en-cancel-fill.svg?react";

const SearchUser = ({ setSearchValue }) => {
  return (
    <div className="searchUser">
      <input
        onChange={(event) => setSearchValue(event.target.value)}
        className="input__user"
        placeholder="Поиск"
      />
      <div className="iconSearch">
        <IconSearch />
      </div>
      <div className="iconDelete">
        <IconDelete />
      </div>
    </div>
  );
};
export default SearchUser;

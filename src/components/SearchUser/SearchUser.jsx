import styles from "./SearchUser.module.scss";
import IconSearch from "../../assets/Icons/en-searsh.svg?react";
import IconDelete from "../../assets/Icons/en-cancel-fill.svg?react";

const SearchUser = ({ setSearchValue, setInputValue, inputValue }) => {
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setSearchValue(event.target.value);
  };
  const handleDeleteClick = () => {
    setInputValue("");
    setSearchValue("");
  };
  return (
    <div className={styles.searchUser}>
      <input
        onChange={handleInputChange}
        type="text"
        className={styles.input__user}
        placeholder="Поиск"
        value={inputValue}
      />
      <div className={styles.iconSearch}>
        <IconSearch />
      </div>
      <div className={styles.iconDelete}>
        <div onClick={handleDeleteClick} className={styles.deleteBtn}>
          <IconDelete />
        </div>
      </div>
    </div>
  );
};
export default SearchUser;

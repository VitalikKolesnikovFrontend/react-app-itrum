import styles from "./SearchUser.module.scss";
import IconSearch from "../../assets/Icons/en-searsh.svg?react";
import IconDelete from "../../assets/Icons/en-cancel-fill.svg?react";

const SearchUser = ({ setSearchValue }) => {
  return (
    <div className={styles.searchUser}>
      <input
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input__user}
        placeholder="Поиск"
      />
      <div className={styles.iconSearch}>
        <IconSearch />
      </div>
      <div className={styles.iconDelete}>
        <IconDelete />
      </div>
    </div>
  );
};
export default SearchUser;

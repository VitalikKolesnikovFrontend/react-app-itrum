import styles from "./MenuItems.module.scss";
const MenuItems = ({ onChangeHandler, checkedPosts, posts }) => {
  return (
    <div className={styles.menuItems}>
      <input
        onChange={onChangeHandler}
        checked={checkedPosts.length === posts.length}
        data-id="checkAll"
        id="checkAll"
        value="checkAll"
        className={styles.input__menuItems}
        type="checkbox"
      ></input>
      <span>Категория</span>
      <span>Подкатегория</span>
      <span>Бренд</span>
      <span>Товары</span>
      <span>Кешбек</span>
    </div>
  );
};
export default MenuItems;

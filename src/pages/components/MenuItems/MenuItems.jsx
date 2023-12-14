import './MenuItems.scss';
const MenuItems = ({ onChangeHandler, checkedPosts, posts }) => {
  return (
    <div className="menuItems">
      <input
        onChange={onChangeHandler}
        checked={checkedPosts.length === posts.length}
        data-id="checkall"
        id="checkall"
        value="checkall"
        className="input__menuItems"
        type="checkbox"></input>
      <span>Категория</span>
      <span>Подкатегория</span>
      <span>Бренд</span>
      <span>Товары</span>
      <span>Кешбек</span>
    </div>
  );
};
export default MenuItems;

import styles from "./Pagination.module.scss";
import LeftArrow from "../../assets/Icons/arrow-left.svg?react";
import RightArrow from "../../assets/Icons/arrow-right.svg?react";
const Pagination = ({
  page,
  limit,
  setPage,
  setLimit,
  changePage,
  userInfo,
}) => {
  const nextPage = (e) => {
    e.preventDefault();
    if (page < Math.ceil(userInfo.length / limit)) {
      changePage(+page + 1);
    }
  };
  const prevPage = (e) => {
    e.preventDefault();
    if (page > 1) {
      changePage(+page - 1);
    }
  };
  return (
    <form className={styles.search}>
      <label className={styles.label}>Показывать</label>
      <select
        onChange={(e) => {
          setLimit(+e.target.value);
          setPage(1);
        }}
        className={styles.select}
        id="items"
        name="items"
        value={limit}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      <label className={styles.label}>Страница</label>
      <input
        value={page}
        onChange={(e) => setPage(e.target.value)}
        className={styles.input__search}
        type="number"
        name="page"
        min="1"
        readOnly
      />
      <span className={styles.text__search}>
        из {`${Math.ceil(userInfo.length / limit)}`}
      </span>
      <button onClick={prevPage} className={styles.button__search}>
        <LeftArrow />
      </button>
      <button onClick={nextPage} className={styles.button__search}>
        <RightArrow />
      </button>
    </form>
  );
};

export default Pagination;

import styles from "./TitleUser.module.scss";
const TitleUser = () => {
  return (
    <div className={styles.titleUser}>
      <span>ФИ</span>
      <span>Почта</span>
      <span>Телефон</span>
    </div>
  );
};

export default TitleUser;

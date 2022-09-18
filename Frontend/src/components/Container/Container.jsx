import styles from "./Container.module.scss";

const Container = ({ stickyNav, content }) => {
  return (
    <div className={styles.container}>
      {window.location.pathname !== "/login" &&
        window.location.pathname !== "/register" &&
        stickyNav}
      {content}
    </div>
  );
};

export default Container;

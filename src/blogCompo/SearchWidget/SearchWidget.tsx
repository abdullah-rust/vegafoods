import React from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchWidget.module.css";

const SearchWidget: React.FC = () => {
  return (
    <div className={styles.widgetContainer}>
      <form className={styles.searchForm}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          <FaSearch className={styles.searchIcon} />
        </button>
      </form>
    </div>
  );
};

export default SearchWidget;

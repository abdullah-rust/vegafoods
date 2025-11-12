import React from "react";
import styles from "./CategoriesWidget.module.css";

interface Category {
  id: number;
  name: string;
  count: number;
}

const DUMMY_CATEGORIES: Category[] = [
  { id: 1, name: "Vegetables", count: 12 },
  { id: 2, name: "Fruits", count: 22 },
  { id: 3, name: "Juice", count: 37 },
  { id: 4, name: "Dries", count: 42 },
];

const CategoriesWidget: React.FC = () => {
  return (
    <div className={styles.widgetContainer}>
      <h3 className={styles.widgetTitle}>Categories</h3>

      <ul className={styles.categoryList}>
        {DUMMY_CATEGORIES.map((cat) => (
          <li key={cat.id} className={styles.categoryItem}>
            <a
              href={`/category/${cat.name.toLowerCase()}`}
              className={styles.categoryLink}
            >
              {cat.name}
            </a>
            <span className={styles.categoryCount}>({cat.count})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesWidget;

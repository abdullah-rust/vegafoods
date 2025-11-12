import React, { useState } from "react";
import styles from "./CategoryFilter.module.css";

interface CategoryFilterProps {
  onCategoryChange?: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  onCategoryChange,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Vegetables", "Fruits", "Juice", "Dried"];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategoryChange?.(category);
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterButtons}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.filterButton} ${
              activeCategory === category ? styles.active : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;

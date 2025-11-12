import React from "react";
import styles from "./SidebarInfoWidget.module.css";

// Type-Safe data for tags
interface Tag {
  id: number;
  name: string;
}

const DUMMY_TAGS: Tag[] = [
  { id: 1, name: "FRUITS" },
  { id: 2, name: "TOMATOE" },
  { id: 3, name: "MANGO" },
  { id: 4, name: "APPLE" },
  { id: 5, name: "CARROTS" },
  { id: 6, name: "ORANGE" },
  { id: 7, name: "PEPPER" },
  { id: 8, name: "EGGPLANT" },
];

const SidebarInfoWidget: React.FC = () => {
  // Static Paragraph Content
  const paragraphText =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!";

  return (
    <div className={styles.widgetContainer}>
      {/* --- Tag Cloud Section --- */}
      <div className={styles.tagCloudSection}>
        <h3 className={styles.widgetTitle}>Tag Cloud</h3>
        <div className={styles.tagList}>
          {DUMMY_TAGS.map((tag) => (
            <a
              href={`/tag/${tag.name.toLowerCase()}`}
              key={tag.id}
              className={styles.tagButton}
            >
              {tag.name}
            </a>
          ))}
        </div>
      </div>

      {/* --- Paragraph Section --- */}
      <div className={styles.paragraphSection}>
        <h3 className={styles.widgetTitle}>Paragraph</h3>
        <p className={styles.paragraphContent}>{paragraphText}</p>
      </div>
    </div>
  );
};

export default SidebarInfoWidget;

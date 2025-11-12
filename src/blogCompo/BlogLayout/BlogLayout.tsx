import React from "react";
import type { ReactNode } from "react";
import styles from "./BlogLayout.module.css";

interface BlogLayoutProps {
  children: ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <main className={styles.mainContent}>{childrenArray[0]}</main>
        <aside className={styles.sidebar}>{childrenArray[1]}</aside>
      </div>
    </div>
  );
};

export default BlogLayout;

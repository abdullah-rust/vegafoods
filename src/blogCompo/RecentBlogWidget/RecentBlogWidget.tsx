import React from "react";
import { FaCalendarAlt, FaUser, FaComment } from "react-icons/fa";
import styles from "./RecentBlogWidget.module.css";
import image1 from "../../assets/Catagories/category-1.jpg.webp";

interface RecentPost {
  id: number;
  title: string;
  date: string;
  author: string;
  commentCount: number;
  imageUrl: string;
}

// Temporary Dummy Data
const DUMMY_RECENT_POSTS: RecentPost[] = [
  {
    id: 1,
    title:
      "Even the all-powerful Pointing has no control about the blind texts",
    date: "April 09, 2019",
    author: "Admin",
    commentCount: 19,
    imageUrl: image1,
  },
  {
    id: 2,
    title:
      "Even the all-powerful Pointing has no control about the blind texts",
    date: "April 09, 2019",
    author: "Admin",
    commentCount: 19,
    imageUrl: image1,
  },
  {
    id: 3,
    title:
      "Even the all-powerful Pointing has no control about the blind texts",
    date: "April 09, 2019",
    author: "Admin",
    commentCount: 19,
    imageUrl: image1,
  },
];

const RecentBlogWidget: React.FC = () => {
  return (
    <div className={styles.widgetContainer}>
      <h3 className={styles.widgetTitle}>Recent Blog</h3>

      <ul className={styles.postList}>
        {DUMMY_RECENT_POSTS.map((post) => (
          <li key={post.id} className={styles.postItem}>
            {/* Left: Image */}
            <div className={styles.postImageContainer}>
              <img
                src={post.imageUrl}
                alt={post.title}
                className={styles.postImage}
              />
            </div>
            {/* Right: Content */}
            <div className={styles.postContent}>
              <a href="#" className={styles.postTitle}>
                {post.title}
              </a>
              <div className={styles.postMeta}>
                {/* Calendar Icon */}
                <span className={styles.metaItem}>
                  <FaCalendarAlt className={styles.icon} />
                  {post.date}
                </span>
                {/* User Icon */}
                <span className={styles.metaItem}>
                  <FaUser className={styles.icon} />
                  {post.author}
                </span>
                {/* Comment Icon */}
                <span className={styles.metaItem}>
                  <FaComment className={styles.icon} />
                  {post.commentCount}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentBlogWidget;

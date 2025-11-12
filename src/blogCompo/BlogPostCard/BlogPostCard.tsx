import React from "react";
import { motion } from "motion/react";
import styles from "./PostCard.module.css";

interface PostCardProps {
  date: string;
  author: string;
  commentCount: number;
  title: string;
  excerpt: string;
  imageUrl: string;
}

const PostCard: React.FC<PostCardProps> = ({
  date,
  author,
  commentCount,
  title,
  excerpt,
  imageUrl,
}) => {
  return (
    <motion.article
      className={styles.postCard}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* 1. LEFT SIDE: Image */}
      <div className={styles.postImageContainer}>
        <img src={imageUrl} alt={title} className={styles.postImage} />
      </div>

      {/* 2. RIGHT SIDE: Content */}
      <div className={styles.postContent}>
        <div className={styles.postMeta}>
          <span className={styles.postDate}>{date}</span>
          <span className={styles.postAuthor}>{author}</span>
          <span className={styles.postComments}>{commentCount}</span>
        </div>
        <h2 className={styles.postTitle}>{title}</h2>
        <p className={styles.postExcerpt}>{excerpt}</p>
        <a href="#" className={styles.readMoreBtn}>
          Read more
        </a>
      </div>
    </motion.article>
  );
};

export default PostCard;

import React from "react";
import PostCard from "../BlogPostCard/BlogPostCard";
import styles from "./BlogList.module.css";
import image1 from "../../assets/Catagories/category-1.jpg.webp";

// TypeScript Interface for Post Data
interface BlogPostData {
  id: number;
  date: string;
  author: string;
  commentCount: number;
  title: string;
  excerpt: string;
  imageUrl: string;
}

const BlogList: React.FC = () => {
  const blogPosts: BlogPostData[] = [
    {
      id: 1,
      date: "July 20, 2019",
      author: "Admin",
      commentCount: 3,
      title:
        "Even the all-powerful Pointing has no control about the blind texts",
      excerpt:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      imageUrl: image1, // Replace with actual image path
    },
    {
      id: 2,
      date: "July 20, 2019",
      author: "Admin",
      commentCount: 3,
      title:
        "Even the all-powerful Pointing has no control about the blind texts",
      excerpt:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      imageUrl: image1, // Replace with actual image path
    },
    {
      id: 2,
      date: "July 20, 2019",
      author: "Admin",
      commentCount: 3,
      title:
        "Even the all-powerful Pointing has no control about the blind texts",
      excerpt:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      imageUrl: image1, // Replace with actual image path
    },
    {
      id: 2,
      date: "July 20, 2019",
      author: "Admin",
      commentCount: 3,
      title:
        "Even the all-powerful Pointing has no control about the blind texts",
      excerpt:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      imageUrl: image1, // Replace with actual image path
    },
    {
      id: 2,
      date: "July 20, 2019",
      author: "Admin",
      commentCount: 3,
      title:
        "Even the all-powerful Pointing has no control about the blind texts",
      excerpt:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      imageUrl: image1, // Replace with actual image path
    },
    {
      id: 2,
      date: "July 20, 2019",
      author: "Admin",
      commentCount: 3,
      title:
        "Even the all-powerful Pointing has no control about the blind texts",
      excerpt:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      imageUrl: image1, // Replace with actual image path
    },
  ];

  return (
    <div className={styles.blogContainer}>
      {blogPosts.map((post) => (
        <PostCard
          key={post.id}
          date={post.date}
          author={post.author}
          commentCount={post.commentCount}
          title={post.title}
          excerpt={post.excerpt}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
};

export default BlogList;

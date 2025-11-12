import HeroBanner from "../../components/HeroBanner/HeroBanner";
import BlogLayout from "../../blogCompo/BlogLayout/BlogLayout";
import BlogPostList from "../../blogCompo/BlogPostList/BlogPostList";
import SearchWidget from "../../blogCompo/SearchWidget/SearchWidget";
import CategoriesWidget from "../../blogCompo/CategoriesWidget/CategoriesWidget";
import RecentBlogWidget from "../../blogCompo/RecentBlogWidget/RecentBlogWidget";
import SidebarInfoWidget from "../../blogCompo/SidebarInfoWidget/SidebarInfoWidget";

export default function Blog() {
  return (
    <>
      <HeroBanner h3Text="Home Blog" h1Text="BLOG" height="300px" />

      <main>
        <BlogLayout>
          <BlogPostList />

          <div className="blog-page-sidebar">
            <SearchWidget />

            <CategoriesWidget />

            <RecentBlogWidget />

            <SidebarInfoWidget />
          </div>
        </BlogLayout>
      </main>
    </>
  );
}

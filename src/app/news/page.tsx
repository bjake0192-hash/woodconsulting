import { getSortedPostsData } from "@/lib/blog";
import NewsClient from "./NewsClient";

export const dynamic = "force-static";

export default function NewsPage() {
  const blogPosts = getSortedPostsData();

  return <NewsClient blogPosts={blogPosts} />;
}

import { getPostData, getSortedPostsData } from "@/lib/blog";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostData(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-8 md:pt-12 pb-24 px-6 relative bg-slate-50">
      <div className="max-w-3xl w-full z-10">
        <Link href="/news" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Insights
        </Link>
        
        {post.image && (
          <div className="w-full h-64 md:h-96 relative rounded-3xl overflow-hidden mb-10 shadow-sm border border-slate-200">
            <Image src={post.image} alt={post.title} fill className="object-cover" unoptimized />
          </div>
        )}

        <div className="flex items-center gap-6 mb-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground border-b border-slate-200 pb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-accent" />
            {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-accent" />
            {post.author || "Riskwood Team"}
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-primary leading-tight mb-10 tracking-tight">
          {post.title}
        </h1>

        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:text-primary prose-a:text-accent prose-a:font-bold hover:prose-a:text-primary prose-img:rounded-xl">
          <ReactMarkdown>{post.content || ""}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

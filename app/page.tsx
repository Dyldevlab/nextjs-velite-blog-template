import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts, getAllTags, sortTagsByCount } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import { Tag } from "@/components/tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My blog",
  description: "This is a description",
};

const POSTS_PER_PAGE = 5;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default function Home({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  const latestPosts = sortedPosts.slice(0, 5);

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
        <div className="container flex flex-col gap-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
            Bienvenue sur mon blog
          </h1>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
            Le but de ce blog est de servir de support pour le suivi 
            de mon stage de BTS CIEL (1e année)
          </p>
        </div>
      </section>
      
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-24">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Derniers articles
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map((post) => (
            <li key={post.slug} className="first:border-t first:border-border">
              <PostItem
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                tags={post.tags}
              />  
            </li>
          ))}
        </ul>
      </section>

      <div className="container max-w-4xl py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-3 mt-8">
          <div className="col-span-12 col-start-1 sm:col-span-8">
            <hr />
            {displayPosts?.length > 0 ? (
              <ul className="flex flex-col">
                {displayPosts.map((post) => {
                  const { slug, date, title, description, tags } = post;
                  return (
                    <li key={slug}>
                      <PostItem
                        slug={slug}
                        date={date}
                        title={title}
                        description={description}
                        tags={tags}
                      />
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>Nothing to see here yet</p>
            )}
            <QueryPagination
              totalPages={totalPages}
              className="justify-end mt-4"
            />
          </div>
          <Card className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {sortedTags?.map((tag) => (
                <Tag tag={tag} key={tag} count={tags[tag]} />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

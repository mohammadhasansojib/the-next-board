'use client'

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  category: string;
  readTime: string;
  imageUrl: string;
};

const PostCard = ({
    post
}: {
    post: BlogPost
}) => {


    return (
        <Card key={post.id} className="overflow-hidden rounded-2xl shadow-sm transition hover:shadow-lg">
        <div className="relative h-48 w-full">
            <Image
            unoptimized
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            />
        </div>

        <CardHeader className="space-y-3">
            <div className="flex items-center justify-between gap-3">
            <Badge variant="secondary">{post.category}</Badge>
            <span className="text-xs text-muted-foreground">{post.readTime}</span>
            </div>

            <CardTitle className="line-clamp-2 text-xl">{post.title}</CardTitle>
            <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
        </CardHeader>

        <CardContent className="pt-0">
            <p className="text-sm text-muted-foreground">
            By <span className="font-medium text-foreground">{post.author}</span> • {post.publishedAt}
            </p>
        </CardContent>

        <CardFooter>
            <Button className="w-full">
                <Link href={`/posts/${post.id}`}>Read More</Link>
            </Button>
        </CardFooter>
        </Card>
    )
}

export default PostCard;
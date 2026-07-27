'use server'

import { posts } from "./store"

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


export const getPosts = async (): Promise<BlogPost[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(posts);
        }, 5000)
    })
}

export const getPostById = async (id: number): Promise<BlogPost[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const post = posts.filter(p => p.id === id);
            
            resolve(post);
        }, 3000)
    })
}
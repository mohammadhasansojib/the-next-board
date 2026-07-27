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

export const posts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React Native",
    excerpt: "Learn the basics of building your first mobile app with React Native.",
    author: "Ayesha Khan",
    publishedAt: "2026-07-01",
    category: "Mobile Development",
    readTime: "5 min read",
    imageUrl: "https://picsum.photos/seed/post1/800/500",
  },
  {
    id: 2,
    title: "10 TypeScript Tips for Cleaner Code",
    excerpt: "Practical TypeScript tips that help you write safer and more maintainable code.",
    author: "Rahul Verma",
    publishedAt: "2026-06-28",
    category: "TypeScript",
    readTime: "7 min read",
    imageUrl: "https://picsum.photos/seed/post2/800/500",
  },
  {
    id: 3,
    title: "How to Design a Simple Blog UI",
    excerpt: "A step-by-step guide to creating a clean and readable blog interface.",
    author: "Nadia Ahmed",
    publishedAt: "2026-06-24",
    category: "UI Design",
    readTime: "6 min read",
    imageUrl: "https://picsum.photos/seed/post3/800/500",
  },
  {
    id: 4,
    title: "Understanding React Hooks",
    excerpt: "A beginner-friendly explanation of useState, useEffect, and custom hooks.",
    author: "Imran Hossain",
    publishedAt: "2026-06-20",
    category: "React",
    readTime: "8 min read",
    imageUrl: "https://picsum.photos/seed/post4/800/500",
  },
  {
    id: 5,
    title: "Best Practices for API Integration",
    excerpt: "Tips for fetching data, handling errors, and keeping your app responsive.",
    author: "Sadia Noor",
    publishedAt: "2026-06-17",
    category: "Backend",
    readTime: "6 min read",
    imageUrl: "https://picsum.photos/seed/post5/800/500",
  },
  {
    id: 6,
    title: "Building a Responsive Layout with CSS",
    excerpt: "Use modern CSS techniques to make your blog app look great on every device.",
    author: "Tanvir Chowdhury",
    publishedAt: "2026-06-13",
    category: "CSS",
    readTime: "5 min read",
    imageUrl: "https://picsum.photos/seed/post6/800/500",
  },
  {
    id: 7,
    title: "A Beginner’s Guide to Git and GitHub",
    excerpt: "Learn the essential Git commands and how to manage your code with GitHub.",
    author: "Mariam Sultana",
    publishedAt: "2026-06-09",
    category: "Version Control",
    readTime: "7 min read",
    imageUrl: "https://picsum.photos/seed/post7/800/500",
  },
  {
    id: 8,
    title: "Writing Better Blog Content",
    excerpt: "Simple writing techniques to make your blog posts more engaging and useful.",
    author: "Fahim Zaman",
    publishedAt: "2026-06-05",
    category: "Content Writing",
    readTime: "4 min read",
    imageUrl: "https://picsum.photos/seed/post8/800/500",
  },
  {
    id: 9,
    title: "How to Add Dark Mode to Your App",
    excerpt: "Implement a smooth dark mode experience with a few practical steps.",
    author: "Rina Akter",
    publishedAt: "2026-06-02",
    category: "Frontend",
    readTime: "6 min read",
    imageUrl: "https://picsum.photos/seed/post9/800/500",
  },
  {
    id: 10,
    title: "Deploying Your App the Easy Way",
    excerpt: "A simple overview of deployment options for frontend and full-stack apps.",
    author: "Hasan Ali",
    publishedAt: "2026-05-29",
    category: "Deployment",
    readTime: "5 min read",
    imageUrl: "https://picsum.photos/seed/post10/800/500",
  },
];
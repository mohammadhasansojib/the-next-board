import { getPosts } from "@/lib/data/posts";
import PostCard from "./PostCard";


const Posts = async () => {
    const posts = await getPosts();


    return (
        <div className="flex gap-5 flex-wrap p-10">
            {posts.map((post) => (
                <PostCard post={post} key={post.id} />
            ))}
        </div>
    )
}

export default Posts;
import { getPostById } from "@/lib/data/posts";
import PostCard from "./PostCard";


const SinglePost = async ({
    id
}: {
    id: number
}) => {
    const posts = await getPostById(id);

    if (posts.length === 0) {
        return (
            <div>
                <h1>No post found</h1>
            </div>
        )
    }

    return (
        <div className="p-10 m-10 max-w-100">
            <PostCard post={posts[0]} />
        </div>
    )
}

export default SinglePost;
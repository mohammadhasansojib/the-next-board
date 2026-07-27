
// import { Suspense } from "react";
import Posts from "../_components/Posts";


const PostsPage = async () => {

    return (
        <div>
            <h1>All Posts</h1>

            {/* <Suspense fallback={<p>Loading Posts...</p>}>
                <Posts />
            </Suspense> */}

            <Posts />

        </div>
    )
}

export default PostsPage;
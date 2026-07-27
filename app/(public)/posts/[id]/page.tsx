import { Suspense } from "react";
import SinglePost from "../../_components/SinglePost";
import PostCardSkeleton from "../../_components/PostCardSkeleton";



const SinglePostPage = async ({
    params
}: {
    params: Promise<{id: string}>
}) => {
    const {id} = await params;

    return (
        <div>
            <h1>Single Post</h1>
            
            <Suspense fallback={
                <div  className="p-10 m-10 max-w-100">
                    <PostCardSkeleton />
                </div>
            }>
                {/* post component */}
                <SinglePost id={Number(id)} />
            </Suspense>
        </div>
    )
}

export default SinglePostPage;
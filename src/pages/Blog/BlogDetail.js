import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GoBack from "../../components/GoBack";

function BlogDetail() {
    const params = useParams();
    const [posts, setPosts] = useState();

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${params.id}`)
        .then(res => res.json())
        .then(data => {
            setPosts(data);
        })
        // eslint-disable-next-line
    }, []);
    // console.log(posts);
    return (
        <>
            <GoBack/>
            {posts && (
                <>
                    <h1>{posts.title}</h1>
                    <p>{posts.body}</p>
                </>
            )}
        </>
    );
}

export default BlogDetail;

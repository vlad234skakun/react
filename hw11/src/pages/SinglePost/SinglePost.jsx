import { useParams } from "react-router-dom";
import Post from "../../Components/Post/Post";

const SinglePost = () => {

    const { id } = useParams();
    return (
        <>
            <h1>Статья открыта</h1>
            <Post id={id} />

        </>
    )
}

export default SinglePost;
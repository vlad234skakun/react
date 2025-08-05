import { useNavigate } from "react-router-dom";

import { articles } from "../../data/data";


const Post = ({ id }) => {
    const navigate = useNavigate();

    const article = articles.find((item) => item.id === Number(id))

    const GoBack = () => {
        navigate(-1);
    }

    return (
        <>
            <button type="button" onClick={GoBack} >Go Back</button>
            <div>{article.body}</div>
        </>
    )
}

export default Post;
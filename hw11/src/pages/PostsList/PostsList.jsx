import { Link } from 'react-router-dom';

import styles from './PostsList.module.css'

import { articles } from '../../data/data.js'

const PostsList = () => {

    const element = articles.map((item) => (
        <li className={styles.link} key={item.id}>
            <Link to={`/posts/${item.id}`} >{item.title}</Link>
        </li>
    ))


    return (
        <>
            <h1>PostsList</h1>
            <ul>
                {element}
            </ul>

        </>
    )
}

export default PostsList;
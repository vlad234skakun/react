import { useSelector } from "react-redux";

import styles from "./User.module.css"

const User = () => {

    const {name, status} = useSelector(store => store)

    return (
        <div>
            <p className={styles.text}>{name}</p>
            <p className={styles.text}>{status}</p>
        </div>
    )
}
export default User;
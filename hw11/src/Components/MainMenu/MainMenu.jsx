
import { NavLink } from "react-router-dom";

import styles from './MainMenu.module.css'


const MainMenu = () => {
    return (
        <ul  >
            <li className={styles.menu} >
                <NavLink className={styles.link} to='/'>Home Page</NavLink>
                <NavLink className={styles.link} to='/posts'>Posts</NavLink>
            </li>
        </ul>
    )
}

export default MainMenu;
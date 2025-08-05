import styles from './Header.module.css'

import { LogoIcon } from '../../icons'

const Header =()=>{
    return(
        <>
            <div className={styles.container}>
                <LogoIcon className={styles.iconLogo} />
            </div>
        </>
    )
}

export default Header
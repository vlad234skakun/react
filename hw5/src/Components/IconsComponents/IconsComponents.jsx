import styles from './IconsComponents.module.css'

import { AppleIcon } from '../../icons'
import { GoogleIcon } from '../../icons'
import { TwitterIcon } from '../../icons'

const IconsComponents =()=>{
    return(
        <>
        <div className={styles.container}>
            <div className={styles.iconsItems}>
                <AppleIcon className={styles.icon} />
                <GoogleIcon className={styles.icon} />
                <TwitterIcon className={styles.icon} />
            </div>
        </div>
        </>
    )
}
export default IconsComponents
import styles from './Header.module.css'

const Header = () => {
    return ( 
        <div className={styles.headerContainer} >
            <div className={styles.logo}><p className={styles.logoText} >Сникер-магазин</p></div>
            <div>
                <ul className={styles.menu} >
                    <li className={styles.menuItem}>Главная</li>
                    <li className={styles.menuItem}>Корзина</li>
                    <li className={styles.menuItem}>Контакты</li>
                </ul>
            </div>
        </div>
        
    )
};
export default Header;
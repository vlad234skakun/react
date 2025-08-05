import styles from './Contacts.module.css'

const Contacts = () => { 
    return ( 
        <div className={styles.contacts} >
            <div className={styles.infoBlock} >
                <h1>Контакты</h1>
                <ul>
                    <li>
                        8 900 000 000 00
                    </li>
                    <li>
                        email@email.com
                    </li>
                </ul>
            </div>
            <form className={styles.form} >
                <div className={styles.dataInputBlock} >
                    <input className={styles.inputInfo} type="text" placeholder='Email' />
                    <input className={styles.inputInfo} type="tel" placeholder='Phone number' />
                </div>
                <div className={styles.inputComent} ><input type="text" placeholder='Написать коментарий' /></div>
            </form>
        </div>
    )
};
export default Contacts;
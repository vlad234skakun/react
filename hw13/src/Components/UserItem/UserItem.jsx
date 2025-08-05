import styles from './UserItem.module.css';

const UserItem = ({ user }) => {

    return (
        <>
            <div className={styles.userItem}>
                <p className={styles.userName} >{user.name}</p>
            </div>
        </>
    )
}
export default UserItem;
import styles from './ProfilList.module.css'

const ProfilList = ({changeUser, user})=>{
    console.log(user);
    
    return (
        <div className={styles.container} >
            <div className={styles.block}>
                <img src={user.picture.large} alt="" />
                <h1>{user.name.first}</h1>
                <p>{user.email}</p>
                <p>{user.phone}</p>
            
                <button className={styles.button} onClick={()=>changeUser()} >Load New User</button>
            </div>
        </div>
    )
}
export default ProfilList
import { useSelector } from "react-redux";

import styles from './UserList.module.css'

import UserItem from "../UserItem/UserItem";

const UserList = () => {

    const { filter, users } = useSelector((store) => ({
        filter: store.filter,
        users: store.users
      }));

    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()))

    const user = filteredUsers.map(user => <UserItem key={user.id} user={user} />)
    
    return (
        <>
            <div className={filter.trim() && filteredUsers.length > 0 ? styles.border : ""}  >
                { filter.trim() && filteredUsers.length > 0 ? user : filter.trim() && <p>Пользователь не найден</p>}
                {/* {filter.trim() ==='' ? "Написать" : (filteredUsers.length > 0 ? user : <p>Пользователь не найден</p>)} */}
                {/* {filteredUsers.length > 0 ? user : <p>Пользователь не найден</p> } */}
            </div>
        </>
    )
}
export default UserList;
import { useSelector } from "react-redux";

const UserList = ( ) => { 
    const users = useSelector((state) => state-users)

    const element = users.map((user) => ( <li key={user.if}>{user.name}: {user.email}</li>  ))
    return ( 
        <ul>
        {element}
        </ul>
    )
};
export default UserList;
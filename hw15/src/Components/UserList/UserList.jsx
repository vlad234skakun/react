const UserList = ({users = []}) => { 

    const element = users.map((user) => (<li key={user.id}>{user.name}</li>))
    if ( users.length ===0) { 
        return <p>Пользователь не найден</p>
    }
    return ( 
        <ul>
            {element}
        </ul>
    )
}

export default UserList
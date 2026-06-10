const UserList = ({users}) => {
    return (
        <div>
            <h2>Users List</h2>
            { users.length > 0 ? (
                <ul>
                {users.map((user) =>(
                <li key={user.id}> {user.name} (
                    {user.email})
                    </li>
                ))}
            </ul>

            ): (
                <h2>no users found</h2>
            )}
            
        </div>
       
    )
}

export default UserList 
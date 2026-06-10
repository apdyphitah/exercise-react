import { useState } from "react";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handlelogin = (event) => {
        event.preventDefault();
    
        if(username && password) {
            setIsLoggedIn(true);
        }
    };

    function handleLogout() {
        setUsername('');
        setPassword('');
        setIsLoggedIn(false);
    };

    if (isLoggedIn) {
        return (
            <div>
                <h1>welcome, {username}</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    }


    return (
        <form onSubmit={handlelogin}>
            <h2>login</h2>
            <div>
                <label>
                    usename: 
                    <input type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required />


                </label>
            </div>
            <div>
                <label>
                    password: 
                    <input type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required/>
                </label>
            </div>
          
            <button type="submit">login</button>
          

        </form>
    );


};

export default LoginForm
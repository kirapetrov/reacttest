import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Authorization = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLoginChange = e => setLogin(e.target.value);
    const handlePasswordChange = e => setPassword(e.target.value);

    const handleSubmit = e => {
        dispatch({ 
                type: 'authorization/authorize', 
                payload: {
                    login: login,
                    password: password
                }
            });

        e.preventDefault();
    }

    return (
        <div>
            <h3>Авторизация</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Login:
                    <input
                        autoFocus={true}
                        value={login}
                        onChange={handleLoginChange} />
                </label>

                <label>
                    Password:
                    <input 
                        type="password"
                        value={password}
                        onChange={handlePasswordChange} />
                </label>

                <input type="submit" value="Auth" />
            </form>
        </div>
    );
}

export default Authorization;
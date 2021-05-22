import React from 'react'

export function Credential(props) {

    const handleLoginChange = e => props.onLoginChange(e.target.value);
    const handlePasswordChange = e => props.onPasswordChange(e.target.value);
    const handleActivityChange = e => props.onActivityChange();        

    return (
        <div>
            <p className="authorization-header">Авторизация пользователя</p>

            <div>
                <label className="label-for-input">Имя пользователя:</label>

                <br />

                <input
                    className="simple-input"
                    autoFocus={true}
                    value={props.login}
                    onChange={handleLoginChange} />

                <br />

                <label className="label-for-input">Пароль:</label>

                <br />

                <input
                    className="simple-input"
                    type="password"
                    value={props.password}
                    onChange={handlePasswordChange} />

                <br />

                <input 
                    type="submit"
                    value="Войти" />

                <br />

                <input 
                    type="submit" 
                    value="Изменить адрес сервера"
                    className="submit-as-link"
                    onClick={handleActivityChange} />
            </div>
        </div>
    );
}
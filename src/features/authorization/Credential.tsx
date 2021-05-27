import React from 'react'

type Props = {
    login: string,
    password: string

    onLoginChange(value: string): void 
    onPasswordChange(value: string): void
    onActivityChange(): void
}

export function Credential(props: Props ) {

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>): void => 
            props.onLoginChange(e.currentTarget.value);

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => 
            props.onPasswordChange(e.currentTarget.value);
            
    const handleActivityChange = (): void => props.onActivityChange();        

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
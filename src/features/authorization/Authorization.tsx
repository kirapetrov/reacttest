import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { useAppSelector, useAppDispatch } from '../../hooks'

import { Credential } from './Credential'
import { Addresses } from './Addresses'

import './authorization.css';

const Authorization = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [ipAddress, setIpAddress] = useState("");
    const [nginxAddress, setNginxAddress] = useState("");

    const [
        isCredentialComponentActive,
        changeCredentialComponentActivity] = useState(true);

    const count = useAppSelector(state => state.authorization)
    const dispatch = useDispatch()

    const handleCredentialComponentActivityChange = () =>
        changeCredentialComponentActivity(!isCredentialComponentActive);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        dispatch(authorize(login, password, ipAddress, nginxAddress));
        e.preventDefault();
    };

    function authorize(
        login: string,
        password: string,
        ipAddress: string,
        nginxAddress: string) {

        return function authorizeThunk(dispatch: any, getState: any) {
            // const response = await client.post('/fakeApi/todos', { todo: initialTodo })
            setTimeout(() => {
                dispatch({
                    type: 'authorization/authorized',
                    payload: `${login} - ${password} - ${ipAddress} - ${nginxAddress}`
                })
            }, 5000)
        }
    }

    const activeControl = isCredentialComponentActive
        ? <Credential
            login={login}
            onLoginChange={setLogin}
            password={password}
            onPasswordChange={setPassword}
            onActivityChange={handleCredentialComponentActivityChange} />
        : <Addresses
            ipAddress={ipAddress}
            onIpAddressChange={setIpAddress}
            nginxAddress={nginxAddress}
            onNginxAddressChange={setNginxAddress}
            onActivityChange={handleCredentialComponentActivityChange} />

    return (
        <form onSubmit={handleSubmit}>
            <SwitchTransition>
                <CSSTransition
                    key={`${isCredentialComponentActive}`}
                    addEndListener={(node, done) => {
                        node.addEventListener("transitionend", done, false);
                    }}
                    classNames="fade" >

                    {activeControl}

                </CSSTransition>
            </SwitchTransition>
        </form>
    );
}

export default Authorization;
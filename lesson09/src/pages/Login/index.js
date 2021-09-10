import {useHistory} from "react-router-dom";
import React, {useState} from "react";
import {userApi} from "../../api/request/user";

import styles from "./Login.module.sass";

export const Login = () => {
    const {push} = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            await userApi.login(email, password);
            push('/');
        } catch (error) {
            console.log('Login Form: ', error.message);
            setError(error.message);
        }
    };

    return (
        <div className={styles.content}>
            <form onSubmit={handleSubmit}>
                <p>Fill fields in the form below to login on chat.</p>
                <div>
                    <input
                        placeholder="Email"
                        name="email"
                        type="text"
                        onChange={handleEmailChange}
                        value={email}
                    />
                </div>
                <div>
                    <input
                        placeholder="Password"
                        name="password"
                        type="password"
                        onChange={handlePasswordChange}
                        value={password}
                    />
                </div>
                <div>
                    {error && <p>{error}</p>}
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

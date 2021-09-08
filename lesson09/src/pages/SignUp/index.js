import {Link, useHistory} from "react-router-dom";
import React, {useState} from "react";
import {userApi} from "../../api/request/user";

export const SignUp = () => {
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
            //todo
            await userApi.registration(email, password);
            push('/login');
        } catch (error) {
            console.dir('Sing Up Form: ', error.message);
            setError(error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Fill fields in the form below to register new account.</p>
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
                    <button type="submit">Sign In</button>
                </div>
                <hr/>
                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
};

import React from 'react';
import "./styles.scss";

const Login = () => {

    return (
        <div className="login-card">
            <h1 className="login-text">LOGIN</h1>
            <form className="login-form">
                <input
                    type="email"
                    placeholder="Email"
                />
                <input
                    type="password"
                    placeholder="senha"
                />
                <div>
                    FAZER LOGIN
                </div>
            </form>
        </div>
    )
}

export default Login;
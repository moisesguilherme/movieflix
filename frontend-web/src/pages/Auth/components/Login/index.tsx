import React from 'react';
import "./styles.scss";

const Login = () => {

    return (
        <div className="login-card">
            <h1 className="login-text">LOGIN</h1>
            <form className="login-form">
                <input
                    className="input-base"
                    type="email"
                    placeholder="Email"
                />
                <input
                    className="input-base"
                    type="password"
                    placeholder="Senha"
                />
                <div className="login-submit login-submit-text">
                    FAZER LOGIN
                </div>
            </form>
        </div>
    )
}

export default Login;
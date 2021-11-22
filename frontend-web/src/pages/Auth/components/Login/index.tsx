import React from 'react';
import "./styles.scss";

const Login = () => {

    return (
        <div className="login-card">
            <h1 className="login-text">LOGIN</h1>
            <form className="login-form">
                <input
                    className="form-control input-base"
                    type="email"
                    placeholder="Email"
                />
                <input
                    className="form-control input-base"
                    type="password"
                    placeholder="senha"
                />
                <div className="login-submit">
                    FAZER LOGIN
                </div>
            </form>
        </div>
    )
}

export default Login;
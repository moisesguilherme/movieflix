import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { makeLogin } from 'core/utils/request';
import { saveSessionData } from 'core/utils/auth';

import "./styles.scss";

type FormState = {
    username: string;
    password: string;
}

type LocationState = {
    from: string;
}

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormState>();
    const [hasError, setHasError ] = useState(false);
    const history = useHistory();
    let location = useLocation<LocationState>();

    const { from } = location.state || { from: { pathname: "/movies" } };


    const onSubmit = (data: FormState) => {
        console.log("Chamou")
        makeLogin(data)
            .then(response => {
                console.log("login: " + response.data);
                setHasError(false);
                saveSessionData(response.data);
                history.replace(from);
            })
            .catch(() => {
                console.log("erro")
                setHasError(true);
            })
    }

    return (
        <div className="login-card">
            <h1 className="login-text">LOGIN</h1>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="margin-bottom-30">
                    <input
                        type="email" 
                        className={`form-control input-base ${errors.username ? 'is-invalid' : '' }`}
                        placeholder="Email"
                        {...register("username", 
                                    { required: 'Campo obrigatório',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Email inválido"
                                    }              
                        })} 
                    />
                    {errors.username && (
                            <div className="feedback">
                                {errors.username.message}
                            </div>
                    )}
                </div>
                <div className="margin-bottom-30">
                    <input
                        type="password" 
                        className={`form-control input-base ${errors.password ? 'is-invalid' : '' }`}
                        placeholder="Senha"
                        {...register("password", { required: 'Campo obrigatório', minLength: 5})} 
                    />
                    {errors.password && (
                            <div className="feedback">
                                {errors.password.message}
                            </div>
                    )}
                </div>
                {hasError && (
                    <div className="alert alert-danger">
                        Usuário ou senha inválido!
                    </div>    
                )}
                <button className="login-submit login-submit-text" >
                    FAZER LOGIN
                </button>                
            </form>
        </div>
    )
}

export default Login;

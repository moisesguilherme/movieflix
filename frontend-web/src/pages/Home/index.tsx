import Login from 'pages/Auth/components/Login';
import { ReactComponent as MainImage } from 'core/assets/images/main-image.svg';
import React from 'react';


import './styles.scss';

type Props = {
    text: string;
}

const Home = ( {text } : Props) => {
    return(
        <div className="home-container">
            <div className="home-text">
                <h5 className="text-tile">Avalie Filmes</h5>
                <h1 className="text-subtitle">Diga o que você achou do seu filme favorito</h1>
                <div className="home-image">
                    <MainImage className="main-image" />
                </div>
            </div>
            <Login />
        </div>
    )
}

export default Home;



import React from 'react';
//import './styles.scss';

type Props = {
    text: string;
}

const Home = ( {text } : Props) => {
    return(

        <h5 className="text">{text}</h5>
    )
}

export default Home;


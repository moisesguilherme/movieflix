import React from 'react';
//import './styles.scss';

type Props = {
    text: string;
}

const Movies = ( {text } : Props) => {
    return(

        <h5 className="text">{text}</h5>
    )
}

export default Movies;


import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { makePrivateRequest } from 'core/utils/request';
import { Genre } from 'core/types/movie';
import './styles.scss'

type Props = {
    genre?:  Genre;
    handleChangeGenre: (genre: Genre) => void;
    clearFilters: () => void;
}

const MovieFilters = ({ 
    handleChangeGenre,
    clearFilters,
    genre
}: Props) => {
    const [isLoadingGenres, setIsLoadingGenres] = useState(false);
    const [genres, setGenres] = useState<Genre[]>([]);
    
    useEffect(() => {
        setIsLoadingGenres(true);
        makePrivateRequest({url: '/genres'})
            .then(response => setGenres(response.data))
            .finally(() => setIsLoadingGenres(false)
            );
    }, []);

    return (
        <div className="card-base movie-filters-containers">
            <Select
                    name="genres"
                    key={`select-${genre?.id}`}
                    value={genre}
                    isLoading={isLoadingGenres}
                    options={genres}
                    getOptionLabel={(option: Genre) => option.name}
                    getOptionValue={(option: Genre) => String(option.id)}
                    className="filter-select-container"
                    classNamePrefix="genres-select"
                    placeholder="Gênero"
                    inputId="genres"
                    onChange={value => handleChangeGenre(value as Genre)}
                    isClearable
            />             
        </div>
    )
}

export default MovieFilters;
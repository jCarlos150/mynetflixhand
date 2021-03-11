import React from 'react';
import './Feature.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ movie }) => {
    // titulo
    //info pontos ano temporadas
    // descrição
    //butoes
    // generos
    console.log(movie);
    let ano = new Date(movie.first_air_date)

    let gem = [];

    for (let i in movie.genres) {
        gem.push(movie.genres[i].name);
    }

    let description = movie.overview;

    if (movie.overview.length > 200) {
        description = description.substring(0, 200) + '...';
    }



    return (
        <section className="Feature" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
        }} >
            <div className="Feature--vertical">
                <div className="Feature--horizontal">
                    <div className="Feature--name">{movie.original_name}</div>
                    <div className="Feature--info">
                        <div className="Feature--info--pontos">
                            {movie.vote_average} pontos
                        </div>
                        <div className="Feature--info--ano">Ano: {ano.getFullYear()}</div>
                        <div className="Feature--info--temporada">{movie.number_of_seasons} {'temporada'}{movie.number_of_seasons > 1 ? 's' : ''}</div>
                    </div>
                    <div className="Feature--description">{description}</div>
                    <div className="Feature--Buttons">
                        <a className="Feature--Buttons-Button" href={`/watch/${movie.id}`}>► Assistir</a>
                        <a className="Feature--Buttons-List" href={`/list/add/${movie.id}`}>+ Minha Lista</a>
                    </div>
                    <div className="Feature--gem">
                        <div className="Feature--gem-t">Genéros:</div>
                        <div className="Feature--gem-g">{gem.join(',  ')}</div></div>
                </div>
            </div>
        </section>
    )
}
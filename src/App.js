import React, { useEffect, useState } from 'react';
import TMDB from './TMDB';
import './App.css';
import MovieRow from './components/MovieRow'
import Feature from './components/Feature';
import Header from './components/Header'
import tenor from './components/tenor.gif';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featureMovie, setFeatureMovie] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {

    const loadAll = async () => {
      let list = await TMDB.getHomeList();
      //console.log(list);
      setMovieList(list);

      // Carregar o featuremovie
      let originalls = list.filter(i => i.slug === 'originals')
      let randonChosen = Math.floor(Math.random() * (originalls[0].items.results.length - 1));
      let chosen = originalls[0].items.results[randonChosen];
      let infoMovie = await TMDB.getMovieInfo(chosen.id, 'tv');
      setFeatureMovie(infoMovie);









    }

    loadAll();



  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }


  }, [])



  return (
    <div className="page">
      <Header black={blackHeader} />

      {featureMovie && <Feature movie={featureMovie} />}

      <section className="list">
        {movieList.map((item, key) => (
          <div>
            <MovieRow key={key} title={item.title} items={item.items} />
          </div>
        ))}
      </section>
      <footer>
        <div>Feito para estudo com base em <a href="https://www.youtube.com/watch?v=tBweoUiMsDg">Netflix-clone</a></div>

        <div>Todos os direitos para Netflix </div>

        <div>Dados retirados de https://www.themoviedb.org</div>
      </footer>

      {movieList.length < 1 &&
        <div className="loading">
          <img src={tenor} alt="loading" />
        </div>
      }
    </div>
  );
}
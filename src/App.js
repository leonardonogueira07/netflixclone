import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';

export default ()=> {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(()=> {
    const loadAll = async () => {
      // pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegar o filme em Destaque
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
      console.log(chosenInfo);
    }

    loadAll();
  }, []);

  return (
    <>
      <div className="MovieRow">
        <section className="MovieRow--Area">
          {featuredData &&
            <FeaturedMovie item={featuredData} />
          }
          <div className="MovieRow--List">
            {movieList.map((item, key)=>(
              <div  className="MovieRow--Item">
                <MovieRow key={key} title={item.title} items={item.items} />
              </div>
            ))}
          </div>          
        </section>
      </div>
    </>
  );
}
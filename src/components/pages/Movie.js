import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";

import MovieList from "../includes/MovieList";
import MovieSearch from "../includes/MovieSearch";

import Loading from "../basics/Loading";
import { gsap } from "gsap";



function Movie() {
  const [videos, setVideos] = useState([]);

  if(videos === undefined){
    Movie();
  }

  const mainAnimation = () => {
    setTimeout(() => {
      document.getElementById("loading").classList.remove("loading__active");
      gsap.to("#header", {
        duration: 0.4,
        top: 0,
        ease: "cubic-bezier(1.000, -0.600, 1.000, -0.600)"
      });
      gsap.to("#footer", {
          duration: 0.4,
          bottom: 0,
          ease: "cubic-bezier(1.000, -0.600, 1.000, -0.600)"
      });
      gsap.to(".cont__title strong", {
          duration: 0.5,
          opacity: 1,
          x: 0,
          y: 0,
          delay : 1,
          ease: "cubic-bezier(1.000, -0.600, 1.000, -0.600)"
      });
      gsap.to(".cont__title em", {
          duration: 0.5,
          opacity: 1,
          x: 0,
          y: 0,
          delay : 1.2,
          ease: "cubic-bezier(1.000, -0.600, 1.000, -0.600)"
      });
      gsap.to(".movie__inner", {
          duration: 3,
          opacity: 1,
          delay : 2,
          ease: "cubic-bezier(1.000, -0.600, 1.000, -0.600)"
      });
    }, 2000)
  }

  const search = (query) => {
      console.log(query)
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&query=${query}&page=1`, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.results))
      .catch(error => console.log('error', error));
  }
  useEffect(() => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }; 

      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&query=dog&page=1`, requestOptions)
        .then(response => response.json())
        .then(result => {
            setVideos(result.results);
            mainAnimation();
          })
        .catch(error => console.log('error', error));
  }, []);

  return (
    <>
      <Loading />
      <Header />
      <Contents>
        <Title title={["movie", "Reference"]} />
        <section className={"movie__cont"}>
          <div className="container">
              <div className="movie__inner">
                <MovieSearch onSearch={search} />
                <MovieList videos={videos} />
              </div>
          </div>
        </section>
        <Contact />
      </Contents>
      <Footer />
    </>
  )
}

export default Movie
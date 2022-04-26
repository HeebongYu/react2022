import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import YoutubeList from "../includes/YoutubeList";
import YoutubeSearch from "../includes/YoutubeSearch";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

function Youtube() {
  const [videos, setVideos] = useState([]);

  if(videos === undefined){
    this.useEffect();
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
      gsap.to(".youtube__inner", {
          duration: 3,
          opacity: 1,
          delay : 2,
          ease: "cubic-bezier(1.000, -0.600, 1.000, -0.600)"
      });
    }, 2000)
  }

  const search = (query) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`https://youtube.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=28&q=${query}&key=${process.env.REACT_APP_API}`, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`https://youtube.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=28&key=${process.env.REACT_APP_API}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setVideos(result.items);
        mainAnimation();
      })
      .catch(error => console.log('error', error));
  }, []);

  return (
    <>
      <Loading />
      <Header />
      <Contents>
        <Title title={["youtube", "Reference"]} />
        <section className={"youtube__cont"}>
          <div className="container">
              <div className="youtube__inner">
                <YoutubeSearch onSearch={search} />
                <YoutubeList videos={videos} />
              </div>
          </div>
        </section>
        <Contact />
      </Contents>
      <Footer />
    </>
  )
}

export default Youtube
import React, { useState } from 'react';
import Lottie, { Options } from 'react-lottie';

import * as animationData from '../animations/home.json';

import video from '../videos/bg.mp4';

export default function Home() {
  const [animation, setAnimation] = useState({
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMinYMax slice',

    },
  } as Options);


  return (
    <div id="home" className="hero is-fullheight is-dark">
      <video muted autoPlay loop>
        <source src={video} type="video/mp4" />
      </video>

      <div className="lottie">
        <Lottie
          options={animation}
        />
      </div>
      {/*  */}
      <div className="hero-body">
        <div className="container">
          <div className="inner">
            <h2 className="subtitle">Somos a Veron Tecnologia</h2>
            <h1 className="title is-1">
              Proteja a sua reputação <br />
              com alta tecnologia<span className="has-text-primary">.</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="hero-foot">
        <div className="container">
          <div className="more">
            <div className="arrow" />
            <span>Saiba como</span>
          </div>
        </div>
      </div>


    </div>
  );
}

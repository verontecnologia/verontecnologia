/* eslint-disable max-len */
import React from 'react';

import video from '../videos/bg-black2.mp4';
import icon from '../svgs/icon-proteja-reputacao.svg';

export default function Protect() {
  return (
    <div id="protect" className="hero has-video-background is-medium is-black">
      <video muted autoPlay loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="hero-body">
        <div className="container is-max-widescreen">
          <div className="columns">
            <div className="column is-5">
              <img src={icon} alt="" />
              <br /> <br />
              <h1 className="title is-uppercase">Proteja a sua reputação com alta tecnologia<span className="has-text-primary">.</span></h1>

              <p>Para colocar em prática a Gestão Estratégica de reputação Online, utilizamos de algoritmos que usam a <b className="has-text-primary">Inteligência Artificial</b> (AI) para localizar, interpretar e excluir completamente <b className="has-text-primary">Pontos de Exposição Negativa</b> (PENS) dos clientes no ambiente digital. </p>
              <br />
              <p>
                A exclusão dos PENS é completa, fazendo a varredura do conteúdo prejudicial em websites jurídicos, de notícias, páginas de busca, artigos e mais.
              </p>

              <br />

              <a href="#contact" className="label">
                Fale conosco <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

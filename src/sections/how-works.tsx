/* eslint-disable max-len */
import React from 'react';
import Lottie, { Options as LottieOptions } from 'react-lottie';
import * as animationData from '../animations/process.json';
import useObserver from '../hooks/useIntersectionOb';

export default function HowWorks() {
  const animation: LottieOptions = {
    loop: false,
    autoplay: false,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid',
    },
  };

  const { observerEntry, elRef } = useObserver({ threshold: 0.1 });

  return (
    <div id="about" className="hero is-medium is-white">
      <div className="hero-body">
        <div className="container is-max-widescreen">
          <p className="subtitle">
            Gerimos estrategicamente a <a href="">Reputação Online</a> de empresas, profissionais, figuras públicas e administrações que desejam manter uma imagem limpa e saudável nos meios virtuais, evitando ou resolvendo possíveis crises, e tendo controle sobre a própria reputação na internet.
          </p>
          <br />

          <div className="tile is-ancestor">
            <div className="tile is-6 is-vertical">
              <div className="tile is-parent">
                <p>
                  <b>
                    Fazemos a varredura e exclusão de todos os links danosos à imagem de nossos clientes. Após a exclusão, continuamos a monitorar constantemente o meio.
                  </b>
                </p>
              </div>

              <div className="tile is-parent">
                <p>
                  Temos total expertise no mercado de gestão reputacional online. Trabalhamos há bastante tempo com <b>Gestão de Reputação Online</b> e <b>Gestão de Crises</b> relacionadas a conteúdos e notícias prejudiciais em quaisquer espectros ideológicos.
                </p>
              </div>
            </div>
            <div className="tile  is-parent is-6">
              <div className="lottie" ref={elRef}>
                <Lottie isPaused={observerEntry?.intersectionRatio < 0.9} options={animation} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

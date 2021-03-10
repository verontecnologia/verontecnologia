import React from 'react';
import iconPriv from '../svgs/icon-total-privacidade.svg';
import iconTime from '../svgs/icon-nosso-time.svg';
import imagePriv from '../images/imagem-total-privacidade.png';
import imageTime from '../images/image-nosso-time.png';

function Layout({
  icon = '', image = '', title = '', descr = <div />, side = '', id = '',
}) {
  const info = (
    <div className="column">
      <div className="columns is-centered is-vcentered">
        <div className="column">
          <div className={`inner is-${side}`}>
            <img src={icon} width={50} alt="" />
            <br />
            <br />
            <div className="title is-uppercase">{title}</div>
            <p>{descr}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const img = (
    <div className="image column is-5 has-img-cover" style={{ backgroundImage: `url(${image})` }} />
  );

  return (
    <div id={id} className="dual-block" style={{ margin: '100px 0' }}>
      <div className="columns is-vcentered">
        {[info, img][side === 'left' ? 'slice' : 'reverse']()}
      </div>
    </div>
  );
}


export default () => (
  <>
    <Layout id="privacity" icon={iconPriv} image={imagePriv} title="Total Privacidade" descr={<>Garantimos 100% de privacidade e anonimato aos nossos clientes, durante todo o processo da Gestão de Reputação Online. Desde o momento da contratação até as etapas finais. Damos a certeza de que ninguém saberá que você nos contratou.</>} side="left" />
    <Layout id="team" icon={iconTime} image={imageTime} title="Nosso Time" descr={<>A nossa equipe conta com profissionais especializados que trabalham em conjunto com mais de um espectro qualitativo, atuando e possuindo expertise nas áreas de <b>Tecnologias da Informação, Judiciais, Estratégias Digitais, Engenharias de Softwares, e Desenvolvimentos de Algoritmos de Exclusão e Dissolução de Dados Segmentados.</b></>} side="right" />
  </>
);

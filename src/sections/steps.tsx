import React from 'react';

import icon1 from '../svgs/icon-gestao-eliminacao.svg';
import icon2 from '../svgs/icon-gestao-monitoramento.svg';
import icon3 from '../svgs/icon-gestao-protecao.svg';
import icon4 from '../svgs/icon-gestao-melhoria.svg';

const icons = [icon1, icon2, icon3, icon4];


export default function Steps() {
  return (
    <div className="hero is-medium is-white">
      <div className="hero-body">
        <div className="container is-max-widescreen">
          <h1 className="title is-uppercase">Etapas da Gestão</h1>

          <div className="columns is-variable is-8">
            <div className="column is-5">
              <br />
              <p style={{ fontSize: 25 }}>
                Através dos planos de contingência e tecnologia de ponta, preparamos estratégias digitais com abordagens multissetoriais para eliminar conteúdos prejudiciais, monitorar o processo, proteger a reputação online do cliente e iniciar o processo de melhoria, encontrando informações de pesquisas com dados especializados e personalizados.
              </p>
            </div>

            <div className="column">
              {[
                {
                  title: 'ELIMINAÇÃO',
                  text: 'Gerenciamos e excluímos todos os tipos de conteúdos e notícias online que se relacionem ou divulguem de alguma forma um posicionamento negativo contra empresas, profissionais, figuras públicas ou administrações no geral.',
                },
                {
                  title: 'Monitoramento',
                  text: 'Através de uma densa pesquisa para o levantamento de links prejudiciais à imagem do cliente, analisamos os riscos e as vulnerabilidades. O nosso monitoramento de links é constante e funciona completamente baseado em Inteligência Artificial, garantindo a você a efetividade desejada.',
                },
                {
                  title: 'Proteção',
                  text: 'Para proteger o cliente, contamos com Softwares de Impulsionamento e Exibição em Redes Sociais, e Softwares de Inteligência Artificial para Exclusão de Dados Segmentados. Além da utilização de metodologias cientificamente criadas, testadas e comprovadas.',
                },
                {
                  title: 'Melhoria',
                  text: 'Com a definição da Mitigação de Impactos, decidimos os melhores caminhos e abordagens para Revisar, Combater e Excluir conteúdos que divulgam negativamente a imagem do cliente.',
                },
              ].map((item, index) => (
                <div className="column">
                  <div className="columns">
                    <div className="column is-narrow">
                      <img src={icons[index]} alt="" />
                    </div>
                    <div className="column">
                      <div className="subtitle is-4 is-uppercase has-text-weight-bold">
                        <span className="has-text-primary">0{(index + 1)}. </span>{item.title}
                      </div>
                      <p>{item.text}</p>
                      <br />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

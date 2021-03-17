import React from 'react';
import Footer from './footer';
import whatsapp from '../svgs/icon-whatsapp.svg';

export default function Modal({ onClose = () => {} }) {
  return (
    <div id="modal">
      <div className="button close" title="close" aria-hidden onClick={onClose} />
      <div className="hero is-medium is-white">
        <div className="hero-body">
          <div className="container is-max-widescreen">
            {/*  */}
            <div className="columns">
              <div className="column">
                <h1 className="title is-2 has-text-weight-normal">
                  Preencha o formulário abaixo com as suas informações para entrar em contato conosco e passe a ter total controle sobre a sua reputação online através de nossos serviços especializados.
                </h1>
              </div>
            </div>
            <br />
            <br />
            <br />

            {/*  */}
            <div className="columns is-vcentered">
              <div className="column">
                {/* form */}

                <form action="https://formspree.io/f/mwkwgykr" method="POST" className="columns is-multiline">
                  {/*  */}
                  <div className="column is-full">
                    <div className="control">
                      <div className="label is-spaced is-small is-uppercase">Seu nome</div>
                      <input className="input is-fullwidth" type="text" name="name" required />
                    </div>
                  </div>
                  {/*  */}
                  <div className="column is-full">
                    <div className="control">
                      <div className="label is-spaced is-small is-uppercase">Email</div>
                      <input className="input is-fullwidth" type="email" name="_replyto" required />
                    </div>
                  </div>
                  {/*  */}
                  <div className="column is-full">
                    <div className="control">
                      <div className="label is-spaced is-small is-uppercase">Número de telefone</div>
                      <input className="input is-fullwidth" type="number" name="phone" id="" />
                    </div>
                  </div>
                  {/*  */}
                  <div className="column is-full">
                    <div className="control">
                      <div className="label is-spaced is-small is-uppercase">Sua mensagem</div>
                      <textarea className="textarea is-fullwidth" rows={4} name="message" required />
                    </div>
                  </div>
                  {/*  */}
                  <div className="column is-full">
                    <div className="control">
                      <button type="submit" className="button is-primary is-fullwidth is-uppercase">Enviar</button>
                    </div>
                  </div>

                </form>
              </div>

              <div className="column is-1" />
              <div className="column">
                <h2 className="title is-5 is-uppercase">Informações gerais</h2>
                <br />
                <span>Conte com a Veron Tecnologia, proteja-se de conteúdos maliciosos e nunca mais se preocupe com crises de reputação online.</span>
                <br />
                <br />
                <a href="https://wa.me/5511937771707" target="blank" className="title is-5 has-text-primary is-uppercase is-bold">
                  +55 (11) 9-3777-1707 <img src={whatsapp} style={{ marginLeft: 15 }} height={14} alt="" />
                </a> <br />
                <br />
                <a href="" className="title is-5 has-text-primary is-uppercase is-bold">contato@verontecnologia.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-foot">
          <Footer />
        </div>
      </div>
    </div>
  );
}

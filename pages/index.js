import Head from 'next/head'
import { useLayoutEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {

  const [scroll, setScroll] = useState(0);

  const lerp = (x, y, a) => x * (1 - a/100) + y * a/100;
  const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a));
  const invlerp = (x, y, a) => clamp((a - x) / (y - x));
  const range = (x1, y1, x2, y2, a) => lerp(x2, y2, invlerp(x1, y1, a));

  const getDocHeight = ()  => Math.max(
      document.body.scrollHeight,  document.documentElement.scrollHeight,
      document.body.offsetHeight,  document.documentElement.offsetHeight,
      document.body.clientHeight,  document.documentElement.clientHeight
  );

  useLayoutEffect(() => {
    window.addEventListener('scroll', () => {
      const  scrollTop  =  window.pageYOffset;
      const  winHeight  =  window.innerHeight;
      const  docHeight  =  getDocHeight();
    
      const  totalDocScrollLength = docHeight  -  winHeight;
      const scrollPostion = Math.floor(scrollTop / totalDocScrollLength * 100);
      setScroll(scrollPostion);
    })

    return window.removeEventListener('scroll', ()=>{})
  },[])

  

  return (
    <>
      <Head>
        <title>Veron</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;700&display=swap" rel="stylesheet" />
      </Head>

      <div className={styles.bg} style={{
        backgroundColor: `rgba(0,0,0, ${lerp(0.75, 0.85, scroll)})`,
        backgroundSize: `${lerp(100, 110, scroll)}%`,
        backgroundPositionY: `calc(50% + ${lerp(0,100, scroll)}px)`
      }}>
        <div className={styles.container}>
          <main className={styles.main}>
            <img className={styles.logo} src="/assets/logo.svg" alt="" />
            <h1 className={styles.title}>
              Proteja a sua reputação com alta tecnologia
          </h1>

            <p className={styles.description}>
              ESTAMOS PREPARANDO TUDO PARA VOCÊ
          </p>
            <a href="#more" className={styles.button}>
              <img src="/assets/arrow.svg" alt="" />
            </a>
          </main>
        </div>

        <div id="more" className={styles.container}>
          <main className={styles.main} style={{ justifyContent:"center" }}>
            <div>
              <h2 className={styles.subtitle}>
                ESTAMOS EM CONSTRUÇÃO
              </h2>

              <p className={styles.subdescription}>
                Gerimos estrategicamente a Reputação Online de empresas, profissionais,
                figuras públicas e administrações que desejam manter uma imagem limpa e
                saudável nos meios virtuais, evitando ou resolvendo possíveis crises, e
                tendo controle sobre a própria reputação na internet.
              </p>
            </div>

            <div className={styles.social}>
              <a href="#">
                <img src="/assets/facebook.svg" alt="Facebook"/>
              </a>
              <a href="#">
                <img src="/assets/twitter.svg" alt="twitter"/>
              </a>
              <a href="#">
                <img src="/assets/instagram.svg" alt="instagram"/>
              </a>
              <a href="mailto: contato@verontecnologia.com">
                <img src="/assets/mail.svg" alt="email"/>
              </a>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

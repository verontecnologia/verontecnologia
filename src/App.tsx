import React from 'react';
import load from '@loadable/component';

import fav from './svgs/favicon.ico';

const Home = load(() => import('./sections/home'));
const Navbar = load(() => import('./sections/navbar'));
const HowWorks = load(() => import('./sections/how-works'));
const Protect = load(() => import('./sections/protect'));
const Steps = load(() => import('./sections/steps'));
const Quote = load(() => import('./sections/quote'));
const Privacity = load(() => import('./sections/privacity'));
const Footer = load(() => import('./sections/footer'));
const Modal = load(() => import('./sections/modal'));
const Loading = load(() => import('./sections/loading'));

const App = () => {
  React.useEffect(() => {
    const favicon = document.createElement('link');
    favicon.setAttribute('rel', 'shortcut icon');
    favicon.setAttribute('type', 'image/x-icon');
    favicon.setAttribute('href', fav);

    document.head.appendChild(favicon);
  }, []);

  const [modal, setModal] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const timeout = React.useRef<NodeJS.Timeout>();
  const [clock, setClock] = React.useState(0);

  const UNIT = 10;
  const MAX = 8000;

  React.useEffect(() => {
    timeout.current = setInterval(() => {
      setClock((c) => c + UNIT);
    }, UNIT);
  }, []);

  React.useEffect(() => {
    if (clock >= MAX) {
      clearInterval(timeout.current);
      setLoading(false);
    }
  }, [clock]);


  return (
    <>
      <Loading progress={clock} loading={loading} max={MAX} />
      { !modal && <Navbar setModal={setModal} /> }
      <Home loading={loading} setModal={setModal} />
      <HowWorks />
      <Protect />
      <Steps />
      <Quote />
      <Privacity setModal={setModal} />
      <Footer />
      { modal && <Modal onClose={() => setModal((prev) => !prev)} /> }
    </>
  );
};

export default App;

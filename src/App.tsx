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

const App = () => {
  React.useEffect(() => {
    const favicon = document.createElement('link');
    favicon.setAttribute('rel', 'shortcut icon');
    favicon.setAttribute('type', 'image/x-icon');
    favicon.setAttribute('href', fav);

    document.head.appendChild(favicon);
  }, []);

  const [modal, setModal] = React.useState(false);

  return (
    <>
      { !modal && <Navbar setModal={setModal} /> }
      <Home setModal={setModal} />
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

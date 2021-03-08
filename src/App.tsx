import React from 'react';

import Home from './sections/home';
import Navbar from './sections/navbar';
import HowWorks from './sections/how-works';
import Protect from './sections/protect';
import Steps from './sections/steps';
import Quote from './sections/quote';
import Privacity from './sections/privacity';

import fav from './svgs/favicon.ico';

const App = () => {
  React.useEffect(() => {
    const favicon = document.createElement('link');
    favicon.setAttribute('rel', 'shortcut icon');
    favicon.setAttribute('type', 'image/x-icon');
    favicon.setAttribute('href', fav);

    document.head.appendChild(favicon);
  }, []);

  return [
    <Navbar />,
    <Home />,
    <HowWorks />,
    <Protect />,
    <Steps />,
    <Quote />,
    <Privacity />,
  ];
};

export default App;

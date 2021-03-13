import React from 'react';

import logo from '../svgs/logo.svg';

export default function Home({ loading = true, progress = 0, max = 0 }) {
  return (
    <div id="loading" className={!loading && 'is-loaded'}>
      <div className="inner">
        <div className="logo">
          <img src={logo} width={160} alt="" />
        </div>
        <progress value={progress} max={max}>70 %</progress>
      </div>
    </div>
  );
}

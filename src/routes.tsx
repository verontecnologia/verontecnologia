import React from 'react';
import { Router } from '@reach/router';
import l from '@loadable/component';

const MainLayout = l(() => import('./layouts/MainLayout'));
const Products = l(() => import('./screens/products'));

export default function Routes() {
  return (
    <Router>
      <MainLayout path="/">
        <Products path="/" />
        <Products path="/:category" />
      </MainLayout>
    </Router>
  );
}

import React from 'react';
import { Outlet, useNavigate } from 'react-router';

import { Button } from '../components/Button';

import './index.css';

export const Layout: React.FC = () => {
  const navigate = useNavigate();

  const handleClickOption = (pagePath: string) => navigate(pagePath);

  return (
    <>
      <header id='LayoutHeader'><h1>Meu E-Commerce</h1></header>
      <section id='LayoutSection'>
        <aside>
          <Button onClick={() => handleClickOption('/products')}>Produtos</Button>
          <Button onClick={() => handleClickOption('/new-product')}>Novo produto</Button>
        </aside>
        <main><Outlet /></main>
      </section>
    </>
  );
};
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import Zap from '../../components/Zap';

function QuatroZeroQuatro() {
  return (
    <>
      <Helmet>
        <title>All Bertinho | 404</title>
      </Helmet>
      <Header />
      <Zap />
      <main>
        <h2>Ih... Não achei essa página não!</h2>
        <p>Que tal <Link to="/">voltar ao início</Link>?</p>
      </main>
    </>
  )
}

export default QuatroZeroQuatro;

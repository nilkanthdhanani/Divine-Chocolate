import React, { useEffect } from 'react';
import { WOW } from 'wowjs';
import HeroBanner from './heroBanner';
import Product from './spacialProduct';
import Forget from './forget';
import Lovely from './lovely';
import Collection from './collection';
import Deals from './deals';
import Product2 from './spacialProduct2';
import Client from './client';
import Updated from './updated';
import 'animate.css';
import 'wowjs/css/libs/animate.css';

export default function Home() {
  useEffect(() => {
    const wow = new WOW({
      live: false
    });
    wow.init();
  }, []);

  return (
    <>
      <HeroBanner />
      <Product />
      <Forget />
      <Lovely />
      <Collection />
      <Deals />
      <Product2 />
      <Client />
      <Updated />
    </>
  );
}

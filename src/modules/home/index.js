import React from 'react'
import HeroBanner from './heroBanner'
import Product from './spacialProduct'
import Forget from './forget'
import Lovely from './lovely'
import Collection from './collection'
import Deals from './deals'
import Product2 from './spacialProduct2'
import Client from './client'
import Updated from './updated'
import 'animate.css';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Product/>
      <Forget/>
      <Lovely/>
      <Collection/>
      <Deals/>
      <Product2/>
      <Client/>
      <Updated/>
    </>
  )
}

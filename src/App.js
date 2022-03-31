import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero' 
import Card from './components/Card'

export default function App () {
   return (
       <>
        <Navbar/> 
        <Hero/>
        <Card phone="0861" email="something@gmail.com"/>
        <Card  email="hello@gmail.com"/>
        <Card phone="8937" email="nothing@gmail.com"/>
       </>
   )

}
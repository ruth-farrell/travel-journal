import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import travelData from './data'



export default function App () {

    const cards = travelData.map(item => {
        return (
        <Card 
         key={ item.id} 
         location={item.location}
         googleMapsUrl = {item.googleMapsUrl}
         title={item.title}
         imageUrl={item.imageUrl}
         startDate={item.startDate}
         endDate={item.endDate}
         description={item.description}
           />
        )
    })

   return (
       <>
        <Header/> 
        <main>
        {cards}
        </main>
        <Footer/>
       </>
   )

}
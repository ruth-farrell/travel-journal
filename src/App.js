import React, { useState } from "react";
import Header from './components/Header'
import Card from './components/Card'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Buttons from './components/Button'
import Timeline from './components/Timeline'
import travelData from './data'



export default function App () {

    const [item, setItem] = useState(travelData);

    const locationItems = [...new Set(travelData.map((item) => item.location))];

    const monthItems = [...new Set(travelData.map((item) => item.startDate.replace('2021', '').slice(2, 20).replace(/\s/g, '')))];

    const filterItems = (curlocation) => {
        const newItem = travelData.filter((newVal) => {
          return newVal.location === curlocation;
        });
        setItem(newItem);
      };

      const filtermonthItems = (curlocation) => {
        const newItem = travelData.filter((newVal) => {
          return newVal.startDate.replace('2021', '').slice(2, 20).replace(/\s/g, '') === curlocation;
        });
        setItem(newItem);
      };

   return (
       <>
        <Header/> 
        <Banner/>
        <main>
        <Buttons setItem={setItem}
         locationItems={locationItems} filterItems={filterItems} />    
        <Timeline setItem={setItem}
         monthItems={monthItems} filtermonthItems={filtermonthItems} />
        <Card item={item}/>
        </main>
        <Footer/>
       </>
   )

}
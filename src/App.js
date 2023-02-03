import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Year from "./components/Year";
import Breadcrumb from "./components/Breadcrumb";
import Number from "./components/Number";
import Map from "./components/Map";
import Timeline from "./components/Timeline";
import Bucketlist from "./components/Bucketlist";
import Quote from "./components/Quote";
import Comingsoon from "./components/Comingsoon";
import travelData from "./data";
import "/node_modules/flag-icons/css/flag-icons.min.css"; 

export default function App() {

  const [travelYear, setTravelYear] = useState('');

  const [travelMonth, setTravelMonth] = useState([]);

  const [travelLocation, setTravelLocation] = useState([]);

  const [query, setQuery] = useState("");

  const [item, setItem] = useState(travelData);

  const countryItemsNotUnique =  travelData.filter((item) => item.startDate.includes(travelYear))
        .map((item) => item.country); 


  const countryItems = Array.from(new Set(countryItemsNotUnique.map(JSON.stringify)), JSON.parse)

  const monthItems = [
    ...new Set(
      travelData
        .filter((item) => item.startDate.includes(travelYear))
        .map((item) => item.startDate.slice(2, -4).replaceAll(' ', ''))
    ),
  ];

  const titleItems = [
    ...new Set(
      travelData
        .filter((item) => item.startDate.includes(travelYear))
        .map((item) => item.title)
    ),
  ];

  const continentItems = [
    ...new Set(
      travelData
        .filter((item) => item.startDate.includes(travelYear))
        .map((item) => item.continent)
    ),
  ];

  const numberCountries = countryItems.length;

  const numberCities = titleItems.length;

  const numberContinents = continentItems.length;

  const yearItems = [
    ...new Set(travelData.map((item) => item.startDate.slice(-4))),
  ];

  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];


  const filterLocation = (curlocation) => {
    setTravelLocation(curlocation);
    filterAllItems();
  };

  const filterYear = (curlocation) => {
    setTravelYear(curlocation);
    filterAllItems();
  };

  const filterMonth = (curlocation) => {
    setTravelMonth(curlocation);
    filterAllItems();
  };

  useEffect(() => {
    filterAllItems();
  }, [travelMonth]);

  useEffect(() => {
    filterAllItems();
  }, [travelLocation]);

  useEffect(() => {
    filterAllItems();
  }, [travelYear]);




  function checkItems(newVal) {
    if (travelMonth.length && travelYear.length && travelLocation.length) {
      return newVal.startDate.slice(2, -4).replace(/\s/g, "") === travelMonth &&
        newVal.startDate.slice(-4) === travelYear &&
        newVal.country.name === travelLocation
    }
    if (travelMonth.length && travelLocation.length) {
      return newVal.startDate.slice(2, -4).replace(/\s/g, "") === travelMonth &&
        newVal.country.name === travelLocation
    }

    if (travelYear.length && travelLocation.length) {
      return newVal.startDate.slice(-4) === travelYear &&
        newVal.country.name === travelLocation
    }

    if (travelYear.length && travelMonth.length) {
      return newVal.startDate.slice(-4) === travelYear &&
        newVal.startDate.slice(2, -4).replace(/\s/g, "") === travelMonth
    }

    if (travelMonth.length) {
      return newVal.startDate.slice(2, -4).replace(/\s/g, "") === travelMonth
    }

    if (travelLocation.length) {
      return newVal.country.name === travelLocation
    }

    if (travelYear.length) {
      return newVal.startDate.slice(-4) === travelYear
    }

    if (!travelYear.length && !travelLocation.length && !travelMonth.length) {
      return newVal === newVal
    }
  }

  const filterAllItems = () => {
    const newItem = travelData.filter(checkItems);
    setItem(newItem);
  };



  return (
    <>
      <Header
        travelYear={travelYear}
        travelMonth={travelMonth}
        travelLocation={travelLocation}
        query={query}
        setTravelYear={setTravelYear}
        setTravelMonth={setTravelMonth}
        setTravelLocation={setTravelLocation}
        setQuery={setQuery}
      />
      <Banner />
      <main>
        <div className="compflex">
          <Year
            yearItems={yearItems}
            travelYear={travelYear}
            filterYear={filterYear}
            setTravelYear={setTravelYear}
          />
          <Number
            travelYear={travelYear}
            numberCountries={numberCountries}
            numberCities={numberCities}
            numberContinents={numberContinents}
          />
        </div>
        <Map
          countryItems={countryItems}
          filterLocation={filterLocation}
          travelYear={travelYear}
          travelLocation={travelLocation}
          setTravelLocation={setTravelLocation}
        />
        <Timeline
          months={months}
          travelYear={travelYear}
          travelMonth={travelMonth}
          monthItems={monthItems}
          setTravelMonth={setTravelMonth}
          filterMonth={filterMonth}
        />
        <Breadcrumb
          travelYear={travelYear}
          travelMonth={travelMonth}
          travelLocation={travelLocation}
          setQuery={setQuery}
          query={query}
        />
        <Card
          item={item}
          query={query}
        />
      </main>
      <Quote />
      <Bucketlist />
      <Comingsoon />
      <Footer />
    </>
  );
}

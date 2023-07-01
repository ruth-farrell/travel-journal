import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Year from "./components/Year";
import Search from "./components/Search";
import Number from "./components/Number";
import Map from "./components/Map";
import Timeline from "./components/Timeline";
import Bucketlist from "./components/Bucketlist";
import Quote from "./components/Quote";
import Comingsoon from "./components/Comingsoon";
import travelData from "./data";
import Tags from "./components/Tags";
import "/node_modules/flag-icons/css/flag-icons.min.css"; 

export default function App() {

  const [travelYear, setTravelYear] = useState('');
  const [travelMonth, setTravelMonth] = useState([]);
  const [travelLocation, setTravelLocation] = useState(false);
  const [tagName, setTagName] = useState([]);
  const [query, setQuery] = useState("");
  const [item, setItem] = useState(travelData);

  const countryItemsNotUnique = 
    travelData.filter((item) => item.startDate.includes(travelYear)).map((item) => item.country); 

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

  const tags = [
    ...new Set(
      travelData
        .map((item) => item.tags)
    ),
  ];

  const tagNames = tags.map(elem =>{ return Object.keys(elem)});
  const uniqueTagNames = Array.from(new Set(tagNames.map(JSON.stringify)), JSON.parse);

  const currentLocationItem = [
    ...new Set(
      travelData
        .filter((item) => item.tags.currentLocation === true)
        .map((item) => item.country)
    ),
  ];

  const homeLocationItem = [
    ...new Set(
      travelData
        .filter((item) => item.tags.homeCountry === true)
        .map((item) => item.country)
    ),
  ];

  const numberCountries = countryItems.length;
  const numberCities = titleItems.length;
  const numberContinents = continentItems.length;

  const yearItems = [
    ...new Set(
      travelData
      .filter((item) => item.startDate !== '')
      .map((item) => item.startDate.slice(-4))
    ),
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

  const filterTag = (curlocation) => {
    setTagName(curlocation);
    filterAllItems();
  };

  useEffect(() => {
    filterAllItems();
  }, [travelMonth, travelLocation, travelYear, tagName]);

  function checkItems(newVal) {

    if (travelMonth.length && travelYear.length && travelLocation.length && tagName.length) {
      return newVal.startDate.slice(2, -4).replace(/\s/g, "") === travelMonth &&
        newVal.startDate.slice(-4) === travelYear &&
        newVal.country.name === travelLocation &&
        newVal.tags[tagName] === true 
    }

    if (travelMonth.length && travelYear.length && travelLocation.length) {
      return newVal.startDate.slice(2, -4).replace(/\s/g, "") === travelMonth &&
        newVal.startDate.slice(-4) === travelYear &&
        newVal.country.name === travelLocation
    }

    if (tagName.length && travelYear.length && travelLocation.length) {
      return newVal.tags[tagName] === true &&
        newVal.startDate.slice(-4) === travelYear &&
        newVal.country.name === travelLocation
    }

    if (travelMonth.length && tagName.length && travelLocation.length) {
      return newVal.startDate.slice(2, -4).replace(/\s/g, "") === travelMonth &&
        newVal.tags[tagName] === true &&
        newVal.country.name === travelLocation
    }

    if (travelMonth.length && travelYear.length && tagName.length) {
      return newVal.startDate.slice(2, -4).replace(/\s/g, "") === travelMonth &&
        newVal.startDate.slice(-4) === travelYear &&
        newVal.tags[tagName] === true 
    }

    if (travelYear.length && travelLocation.length) {
      return newVal.startDate.slice(-4) === travelYear &&
        newVal.country.name === travelLocation
    }

    if (travelMonth.length && travelYear.length) {
      return newVal.startDate.slice(2, -4).replace(/\s/g, "") === travelMonth &&
        newVal.startDate.slice(-4) === travelYear
    }

    if (travelMonth.length && travelLocation.length) {
      return newVal.startDate.slice(2, -4).replace(/\s/g, "") === travelMonth &&
        newVal.country.name === travelLocation
    }

    if (tagName.length && travelLocation.length) {
      return newVal.tags[tagName] === true &&
        newVal.country.name === travelLocation
    }

    if (travelMonth.length && tagName.length) {
      return newVal.startDate.slice(2, -4).replace(/\s/g, "") === travelMonth &&
        newVal.tags[tagName] === true
    }

    if (travelYear.length && tagName.length) {
      return newVal.startDate.slice(-4) === travelYear &&
             newVal.tags[tagName] === true
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

    if (tagName.length) {
      return newVal.tags[tagName] === true
    }

    if (!travelYear.length && !travelLocation.length && !travelMonth.length && !tagName.length) {
      return newVal
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
        tagName={tagName}
        query={query}
        setTravelYear={setTravelYear}
        setTravelMonth={setTravelMonth}
        setTravelLocation={setTravelLocation}
        setTagName={setTagName}
        setQuery={setQuery}
      />
      <Banner />
      <main>
        <div className="compflex twothirds">
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
        { (travelYear.length)
        ? <Timeline
          months={months}
          travelYear={travelYear}
          travelMonth={travelMonth}
          monthItems={monthItems}
          setTravelMonth={setTravelMonth}
          filterMonth={filterMonth}
        />
        : '' 
        }
        <Map
          countryItems={countryItems}
          filterLocation={filterLocation}
          travelYear={travelYear}
          travelLocation={travelLocation}
          setTravelLocation={setTravelLocation}
          tagName={tagName}
          currentLocationItem={currentLocationItem}
          homeLocationItem={homeLocationItem}
        />
         <Tags
          uniqueTagNames = {uniqueTagNames}
          tagName={tagName}
          setTagName={setTagName}
          filterTag={filterTag}
        /> 
        <Search
          travelYear={travelYear}
          travelMonth={travelMonth}
          travelLocation={travelLocation}
          tagName={tagName}
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

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Destinations from "./components/Destinations";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Year from "./components/Year";
import Search from "./components/Search";
import Number from "./components/Number";
import Map from "./components/Map";
import Timeline from "./components/Timeline";
import Bucketlist from "./components/Bucketlist";
import Backtotop from "./components/Backtotop";
import Quote from "./components/Quote";
import Comingsoon from "./components/Comingsoon";
import travelData from "./data";
import Tags from "./components/Tags";
import "/node_modules/flag-icons/css/flag-icons.min.css"; 

export default function App() {

  // State Data
  const [travelYear, setTravelYear] = useState("");
  const [travelMonth, setTravelMonth] = useState("");
  const [travelLocation, setTravelLocation] = useState("");
  const [tagName, setTagName] = useState("");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState(true);
  const [item, setItem] = useState(travelData);

  // Sorting Data Functions 

  // Merge Arrays
  let newArray = [];
  const mergeArrays = (...arrays) => {
    for (let i = 0; i < arrays.length; i++ ) {
      newArray.push(...arrays[i]);
    }
    return newArray;
  }

  // Sort Alphabetically
  const dynamicSort = (property) => {
    let sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a,b) {
      const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }

  // Travel Data Items
  const countryItemsNotUnique = 
    travelData
      .filter((item) => item.startDate.includes(travelYear))
      .filter((item) => item.startDate.includes(travelMonth))
      .map((item) => item.country); 

  const countryItems = Array.from (
    new Set(countryItemsNotUnique.map(JSON.stringify)),
     JSON.parse);

  countryItems.sort(dynamicSort("name"));

  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const monthItems = [
    ...new Set(
      travelData
        .filter((item) => item.startDate.includes(travelYear))
        .map((item) => item.startDate.slice(2, -4).replaceAll(' ', ''))
    ),
  ];

  const yearItems = [
    ...new Set(
      travelData
      .filter((item) => item.startDate !== '')
      .map((item) => item.startDate.slice(-4))
    ),
  ];

  const titleItems = [
    ...new Set(
      travelData
        .filter((item) => item.startDate.includes(travelYear))
        .filter((item) => item.startDate.includes(travelMonth))
        .map((item) => item.title)
    ),
  ];

  const continentItems = [
    ...new Set(
      travelData
        .filter((item) => item.startDate.includes(travelYear))
        .filter((item) => item.startDate.includes(travelMonth))
        .map((item) => item.continent)
    ),
  ];

  const tags = [
    ...new Set(
      travelData
        .filter((item) => (item.startDate.includes(travelYear)) && 
        (item.startDate.includes(travelMonth)) && (item.country.name.includes(travelLocation)))
        .map((item) => item.tags)
    ),
  ];

  tags.forEach(array => mergeArrays(array));

  const tagItems = Array.from(new Set(newArray.map(JSON.stringify)), JSON.parse);

  // Number Data 
  const numberCountries = countryItems.length;
  const numberCities = titleItems.length;
  const numberContinents = continentItems.length;

  // Tag Icon Data in Map
  const currentLocationItem = [
    ...new Set(
      travelData
        .filter((item) => item.tags.includes("Current Location"))
        .map((item) => item.country)
    ),
  ];

  const homeLocationItem = [
    ...new Set(
      travelData
        .filter((item) => item.tags.includes("Home Country"))
        .map((item) => item.country)
    ),
  ];

   // Filter Travel Destinations
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

  const checkItems = (newVal) => {
    return (travelYear.length ? (travelYear === newVal.startDate.slice(-4)) : true) &&
      (travelMonth.length ? (travelMonth === newVal.startDate.slice(2, -4).replace(/\s/g, "")) : true) &&
      (travelLocation.length ? (travelLocation === newVal.country.name) : true) &&
      (tagName.length ? (newVal.tags.includes(tagName)) : true);
  }

  const filterAllItems = () => {
    const newItem = travelData.filter(checkItems);
    setItem(newItem);
  };

  useEffect(() => {
    filterAllItems();
  }, [travelMonth, travelLocation, travelYear, tagName]);

  return (
    <>
      <Header
        {...{ travelYear, travelMonth, travelLocation, tagName, query, 
          setTravelYear, setTravelMonth, setTravelLocation, setTagName, setQuery }}
      />
      <Hero />
      <main>
        <div className="compflex">
          <Year
            {...{ yearItems, travelYear, filterYear, setTravelYear, setTravelMonth }}
          />
          <Number
            {...{ travelYear, travelMonth, numberCountries, numberCities, numberContinents }}
          />
          {travelYear.length ? 
          <Timeline
            {...{ months, travelMonth, travelYear, monthItems, setTravelMonth, filterMonth }}
          />
          : '' 
          }
        </div>
        <Map
           {...{ countryItems, filterLocation, travelMonth, travelYear, travelLocation, 
            setTravelLocation, tagName, currentLocationItem, homeLocationItem }}
        />
        <Tags
          {...{ tagItems, tagName, setTagName, filterTag }}
        /> 
        <Search
          {...{ setQuery, setSort, sort }}
        />
        <Destinations
          {...{ item, query, sort }}
        />
      </main>
      <Quote />
      <Bucketlist />
      <Comingsoon />
      <Footer />
      <Backtotop />
    </>
  );
}

import React, { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Year from "./components/Year";
import Number from "./components/Number";
import Buttons from "./components/Button";
import Timeline from "./components/Timeline";
import travelData from "./data";

export default function App() {
  const currentYear = new Date().getFullYear().toString();

  const [travelYear, setTravelYear] = useState(currentYear);

  const [travelMonth, setTravelMonth] = useState([]);

  const [travelLocation, setTravelLocation] = useState([]);

  const travelDataByYear = travelData.filter((item) =>
    item.startDate.includes(travelYear)
  );

  const [item, setItem] = useState(travelData);

  const locationItems = [
    ...new Set(
      travelData
        .filter((item) => item.startDate.includes(travelYear))
        .map((item) => item.location)
    ),
  ];

  const titleItems = [
    ...new Set(
      travelData
        .filter((item) => item.startDate.includes(travelYear))
        .map((item) => item.title)
    ),
  ];

  const numberCountries = locationItems.length;

  const numberCities = titleItems.length;

  const yearItems = [
    ...new Set(travelData.map((item) => item.startDate.slice(-4))),
  ];

  const monthItems = [
    ...new Set(
      travelData
        .filter((item) => item.startDate.includes(travelYear))
        .map((item) => item.startDate.slice(2, -4).replace(/\s/g, ""))
    ),
  ];

  const filterLocation = (curlocation) => {
    setTravelMonth([]);
    setTravelLocation(curlocation);
    const newItem = travelData.filter((newVal) => {
      return (
        newVal.location === curlocation &&
        newVal.startDate.slice(-4) === travelYear
      );
    });
    setItem(newItem);
  };

  const filterYear = (curlocation) => {
    setTravelMonth([]);
    setTravelLocation([]);
    setTravelYear(curlocation);
    const newItem = travelData.filter((newVal) => {
      return newVal.startDate.slice(-4) === curlocation;
    });
    setItem(newItem);
  };

  const filterMonth = (curlocation) => {
    setTravelLocation([]);
    setTravelMonth(curlocation);
    const newItem = travelData.filter((newVal) => {
      return newVal.startDate.slice(2, -4).replace(/\s/g, "") === curlocation;
    });
    setItem(newItem);
  };

  return (
    <>
      <Header />
      <Banner />
      <main>
        <div className="compflex">
          <Year
            yearItems={yearItems}
            travelYear={travelYear}
            filterYear={filterYear}
          />
          <Number
            yearItems={yearItems}
            travelYear={travelYear}
            filterYear={filterYear}
            numberCountries={numberCountries}
            numberCities={numberCities}
            titleItems
          />
        </div>
        <Buttons
          setItem={setItem}
          locationItems={locationItems}
          filterLocation={filterLocation}
          travelYear={travelYear}
          travelLocation={travelLocation}
          setTravelMonth={setTravelMonth}
          travelDataByYear={travelDataByYear}
          setTravelLocation={setTravelLocation}
        />
        <Timeline
          setItem={setItem}
          monthItems={monthItems}
          travelYear={travelYear}
          travelMonth={travelMonth}
          setTravelMonth={setTravelMonth}
          setTravelLocation={setTravelLocation}
          travelDataByYear={travelDataByYear}
          filterMonth={filterMonth}
        />
        <Card
          item={item}
          travelYear={travelYear}
          travelMonth={travelMonth}
          travelLocation={travelLocation}
        />
      </main>
      <Footer />
    </>
  );
}

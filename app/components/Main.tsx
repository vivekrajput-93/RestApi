"use client";

import React, { useState } from 'react';
import data from '../data.json';
import CardProps from './CardProps';
import { Country } from '../type';
import Search from './Search';
import Filter from './Filter';



const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("all");

  const filteredCountries = data.filter(( Country) => {
    const matchesSearchTerm = Country.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = region === 'all' || Country.region === region;
    return matchesSearchTerm && matchesRegion;
  });

  return (
    <div className='flex w-full h-full max-[786px]:flex max-[786px]:flex-col '>
      <Search setSearchTerm={setSearchTerm} />
      <Filter setRegion={setRegion} />
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {filteredCountries.map((Country, index: number) => (
          <CardProps key={index} Country={Country} />
        ))}
      </div>
    </div>
  );
}

export default Main;

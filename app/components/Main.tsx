import React from 'react';
import data from '../data.json';
import CardProps from './CardProps';
import { Country } from '../type'

const Main: React.FC = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-10   justify-center">
      {data.map((country: Country, index: number) => (
        <CardProps key={index} country={country} />
      ))}
    </div>
  );
}

export default Main;
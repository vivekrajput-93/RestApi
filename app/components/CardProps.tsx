import React from 'react';
import { Country } from '../type';

interface CardProps {
  country: Country;
}

const CardProps: React.FC<CardProps> = ({ country }) => {
  return (
    <div className="card border w-[250px] mt-5 rounded-lg flex flex-col gap-y-2 pb-2 ">
      <img src={country.flags.svg}  className='card-img h-[163px] w-[250px]' alt={`Flag of ${country.name}`} />
      <h2 className='px-2 font-bold'>{country.name}</h2>
      <p className='text-sm px-2'><strong>Population:</strong> {country.population.toLocaleString('en-US')}</p>

      <p className='text-sm px-2'><strong>Region:</strong> {country.region}</p>
      <p className='text-sm px-2'><strong>Capital:</strong> {country.capital}</p>
    </div>
  );
}

export default CardProps;

import React from 'react';
import { Country } from '../type';

interface CardProps {
  Country: Country;
}

const CardProps: React.FC<CardProps> = ({ Country }) => {
  return (
    <div className="card border w-[250px] mt-5 rounded-lg flex flex-col gap-y-2 pb-2 ">
      <img src={Country.flags.svg}  className='card-img h-[163px] w-[250px]' alt={`Flag of ${Country.name}`} />
      <h2 className='px-2 font-bold'>{Country.name}</h2>
      <p className='text-sm px-2'><strong>Population:</strong> {Country.population.toLocaleString('en-US')}</p>

      <p className='text-sm px-2'><strong>Region:</strong> {Country.region}</p>
      <p className='text-sm px-2'><strong>Capital:</strong> {Country.capital}</p>
    </div>
  );
}

export default CardProps;

import React from 'react'
// Libraries
import Image from 'next/image';
import Link from 'next/link';

import { formatPopulation } from '@/helpers';

const Card = ({country}) => {

  const { name, population, region, capital, flags } = country;

  return (
    <Link href={`/country/${name.common.toLowerCase()}`}>
      <div className='rounded-2xl overflow-hidden shadow-2xl h-[400px] bg-gray-100 dark:bg-gray-700'>
        <div className='w-full h-1/2'>
          <Image src={flags.png} alt={flags.alt || `${name.common}`} width={450} height={150} className='w-full h-full rounded-2xl'/>
        </div>
        <div className='p-8 font-thin'>
          <p className='font-bold text-xl mb-4'>{name.common}</p>
          <p><span className='font-semibold'>Population:</span> {formatPopulation(population)}</p>
          <p><span className='font-semibold'>Region:</span> {region}</p>
          <p><span className='font-semibold'>Capital:</span> {capital ? capital[0] : ''}</p>
        </div>
      </div>
    </Link>

  )
}

export default Card
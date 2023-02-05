import React from 'react'
// Components
import Layout from '@/components/Layout'
// Funtions
import { formatPopulation, capitalize, replaceSpaces, replaceUnderscores } from '@/helpers';
// Libraries
import Image from 'next/image';
import { useRouter } from 'next/router';


const Country = ({country, url}) => {
    const { name, population, region, subregion, capital, flags, tld, currencies, languages, borders } = country[0];
    console.log("🚀 ~ file: [url].js:13 ~ Country ~ currencies", currencies)
    const router = useRouter();

  return (
    <Layout title={`Countries App - ${capitalize(url)}`}>
        <div className='container mx-auto px-4 md:px-0 mt-10'>
            <div>
                <button className="rounded-lg border-2 shadow-2xl px-12 py-2 font-medium transition ease-in duration-300 hover:bg-slate-200 hover:text-black" onClick={() => router.back()}>Back</button>
            </div>
            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 md:items-center'>
                <div>
                    <Image src={flags.png} alt={flags.alt || `${name.common}`} width={450} height={300}/>
                </div>
                <div className='space-y-8 mt-8'>
                    <div>
                        <p className='font-bold text-2xl mb-4'>{name.common}</p>
                    </div>
                    <div className='md:grid md:grid-cols-2'>
                        <div className='space-y-2 font-thin'>
                            <p><span className='font-semibold'>Population:</span> {formatPopulation(population)}</p>
                            <p><span className='font-semibold'>Region:</span> {region}</p>
                            <p><span className='font-semibold'>Sub Region:</span> {subregion}</p>
                            <p><span className='font-semibold'>Capital:</span> {capital ? capital[0] : ''}</p>
                        </div>
                        <div className='space-y-2 font-thin'>
                            <p><span className='font-semibold'>Top Level Domain:</span> {tld ? tld[0] : ''}</p>
                            <p><span className='font-semibold'>Currencies:</span> {currencies && Object.values(currencies).map(value => value.name).join(', ')}</p>
                            <p><span className='font-semibold'>Languages:</span> {languages && Object.values(languages).join(', ')}</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-lg font-semibold'>Border Countries:</p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export async function getStaticPaths() {
    const response = await fetch(`${process.env.API_HOST}/all`);
    const countries = await response.json();

    const paths = countries.map((country) => ({
      params: { 
        url: replaceSpaces(country.name.common.toLowerCase()),
       },
    }));
  
    return { paths, fallback: false };
  }

export async function getStaticProps ({params: {url}}) {
    const response = await fetch(`${process.env.API_HOST}/name/${replaceUnderscores(url)}`);
    const country = await response.json();
    return {
      props: {
        country,
        url,
      }
    }
}

export default Country
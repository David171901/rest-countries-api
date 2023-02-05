import { useEffect, useState } from 'react';
// Components
import Layout from '@/components/Layout'
import Form from '@/components/Form'
import Card from '@/components/Card';

export default function Home({countries}) {
  const [countriesState, setCountriesState] = useState([...countries])
  const [isFirts, setIsFirts] = useState(false)
  const [datos, setDatos] = useState({
    search: '',
    continent: '',
  })

  const handleChangeDatos = e => {
    setDatos({
        ...datos,
        [e.target.name] : e.target.value
    })
  }
  
  useEffect(() => {
    if(isFirts) {
      setCountriesState(countries.filter(el => {
        if(datos.search && datos.continent) return (el.region == datos.continent && el.name.common.includes(datos.search));
        else if (datos.continent) return el.region == datos.continent;
        else if (datos.search) return el.name.common.includes(datos.search);
        else return true
      }))    
    } else {
      setIsFirts(true)
    }
  }, [datos])

  return (
    <>
      <Layout title='Countries App'>
        <Form datos={datos} handleChangeDatos={handleChangeDatos}/>
        <div className='container mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 md:gap-16 mt-10'>
          {countriesState.map( (country) => (
            <Card 
            country={country}
            key={country.name.common}
            />
          ))}
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps () {
  const response = await fetch(`${process.env.API_HOST}/all`);
  const countries = await response.json();
  return {
    props: {
      countries,
    }
  }
}
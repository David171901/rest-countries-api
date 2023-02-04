import React from 'react'

const Form = ({ datos, handleChangeDatos }) => {
  return (
    <section className='container px-4 md:px-0 mx-auto mt-6 space-y-6 md:space-y-0 flex flex-col md:flex-row md:justify-between'> 
      <div>
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input 
              type="search" 
              name="search" 
              className="block w-full md:w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none dark:bg-gray-700 dark:text-white"   
              placeholder="Search for a country ..." 
              value={datos.search} 
              onChange={ e => handleChangeDatos(e)}
            />
        </div>
      </div>
      <div>
        <select 
          className="block w-52 p-4 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none dark:bg-gray-700 dark:text-white" 
          name="continent"
          value={datos.continent}
          onChange={ e => handleChangeDatos(e)}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  )
}

export default Form
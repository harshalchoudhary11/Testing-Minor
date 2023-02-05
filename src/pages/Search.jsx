import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'
import c1 from '../assets/1.jpg'
import c2 from '../assets/2.jpg'
import c3 from '../assets/3.jpg'
import c4 from '../assets/4.jpg'
import c5 from '../assets/5.jpg'
import c6 from '../assets/6.jpg'
import c7 from '../assets/7.jpg'
import { BsSearch} from 'react-icons/bs'
import { useState,useEffect } from 'react';


const Search = () => {
  const [searchInput,setSearchInput] = useState("");

  const {loading}=useSelector(state=> state.user)
  return (
    loading ? <Loader className="h-screen" /> :
    <div className='bg-amber-100'>
      
<form class="flex items-center pt-4">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full ml-80">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What do you want to listen?"/>
        {/* onKeyPress={event => {
        if(event.key == "Enter"){
          console.log("Enter pressed")
        }
      }} */}
      {/* onChange{event => setSearchInput(event.target.value)} */}
    </div>
    <button onClick={( )=>{console.log("Button Clicked")}} type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       <BsSearch
       className='w-5 h-5'
       />
        <span class="sr-only">Search</span>
    </button>
   
   
   
</form>

<div>
    <div className="px-4 py-20  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      
      <h2 className="max-w-lg mb-112 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl  md:mx-auto">
        <span className="relative inline-block">
          <span className="relative">Browse all</span>
        </span>{' '}
      </h2>
      
    </div>
      <h1 className="max-w-lg mb-16 font-serif text-3xl font-bold leading-none tracking-tight text-gray-700 sm:text-4xl "></h1>
    
          
           <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 sm:mt-10 md:mt-7 pt-10">
        <div>
        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={c1}
            alt="Person"
          />
          <a href="https://www.spotify.com"><div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          </div></a>
          </div>
        </div>
      <div>
        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={c2}
            alt="Person"
          />
          <a href="https://www.spotify.com"><div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          </div></a>
        </div>
      </div>
      <div>
        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80 "
            src={c3}
            alt="Person"
          />
          <a href="https://www.spotify.com"><div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          </div></a>
        </div>
      </div>
           
      <div>
        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={c4}
            alt="Person"
          />
          <a href="https://www.spotify.com"><div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          </div></a>
        </div>
      </div>
      <div>
        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={c5}
            alt="Person"
          />
          <a href="https://www.spotify.com"><div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          </div></a>
        </div>
      </div>
      <div>
        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={c6}
            alt="Person"
          />
          <a href="https://www.spotify.com"><div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          </div></a>
        </div>
      </div>
      <div>
        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={c7}
            alt="Person"
          />
          <a href="https://www.spotify.com"><div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          </div></a>
        </div>
      </div>
      <div>
        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={c1}
            alt="Person"
          />
          <a href="https://www.spotify.com"><div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          </div></a>
        </div>
      </div>
      <div>
        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={c2}
            alt="Person"
          />
          <a href="https://www.spotify.com"><div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          </div></a>
        </div>
      </div>
      <div>
        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={c3}
            alt="Person"
          />
          <a href="https://www.spotify.com"><div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          </div></a>
        </div>
      </div>
      <div>
        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={c4}
            alt="Person"
          />
          <a href="https://www.spotify.com"><div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          </div></a>
        </div>
      </div>
      <div>
        <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={c5}
            alt="Person"
          />
          <a href="https://www.spotify.com"><div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          </div></a>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>

    
)
}

export default Search
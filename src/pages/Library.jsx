import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'
import {TbPlaylist} from 'react-icons/tb'
import {GrFavorite} from 'react-icons/gr'

const Library = () => {
  const { loading } = useSelector(state => state.user)
  return (
    loading ? <Loader className="h-screen" /> :
      <div className='bg-amber-100 h-screen rounded-2xl '>
        {/* <!-- component --> */}
        <div className="mx-auto grid max-w-4xl grid-cols-12 gap-12 bg-grren-100 p-2 ml-auto font-sans	 rounded-2xl ">
          {/* <div className="header col-span-12 rounded-lg border border-gray-300 bg-gray-600 py-8">
            <!-- Header content -->
          </div> */}
          <div className=" col-span-12 rounded-2xl border border-black bg-neutral-300 p-32 sm:col-span-6  hover:bg-zinc-500 font-sans	">
             <h1 className='text-center text-2xl  hover:bg-black hover:text-white hover:rounded-lg font-sans'><TbPlaylist className='w-40'/>Playlist</h1>
          </div>
          <div className=" col-span-12 rounded-xl border border-black bg-neutral-300  p-32 sm:col-span-6  hover:bg-zinc-500 font-sans	">
            <h1 className='text-center text-2xl hover:bg-black hover:text-white hover:rounded-lg font-sans'><GrFavorite className='w-40'/>Favoratie Song</h1>
          </div>
          {/* <div className="footer col-span-12 rounded-lg border border-gray-800 bg-gray-700 p-6">
            <!-- Footer content -->
          </div> */}
        </div>
      </div>
  )
}

export default Library

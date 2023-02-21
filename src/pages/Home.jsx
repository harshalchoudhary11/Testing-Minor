import React from 'react'
import { useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import {BsPlayCircle} from 'react-icons/bs'
import { BiSkipPreviousCircle , BiSkipNextCircle} from 'react-icons/bi'
import c7 from '../assets/7.jpg'

import Camera from '../components/Camera'


const Home = () => {
  const { message, error, loading } = useSelector(state => state.user)
  const alert = useAlert()
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch({ type: "CLEAR_ERROR" })
    }
    if (message) {
      alert.success(message)
      dispatch({ type: "CLEAR_MESSAGE" })
    }
  }, [dispatch, error, message, alert])


  return (

    loading ? <Loader classNameName="h-screen" /> :


      <div className=''>
        {/* <Camera/> */}

         {/* <div className=''> < Camera className='rounded-full h-50 w-40 ml-auto mr-auto align-item centre border-slate-500 bg-red-700'
      
         /></div>  */}
        {/* <div className="w-screen h-64 " >

          <div class=" my-11 grid max-w-8xl grid-cols-12 gap-4 p-1 bg-amber-200 ">

            <div class="header col-span-12 rounded-lg border border-gray-300 bg-sky-600 py-8">

            </div>
            <div class=" col-span-12 rounded-lg border border-gray-500 bg-gray-200 p-44 sm:col-span-8">
              <div className="flex items-center justify-center h-64  bg-red-lightest">
            <div className="bg-pink-100 shadow-lg rounded-lg w-full  absolute bottom-1 ">
              <div className="flex">
                <div>
                  <img className="w-full h-min rounded hidden md:block" src="https://tailwindcss.com/img/card-top.jpg" alt="Album Pic" />
                </div>
                <div className="w-full p-8">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-2xl text-grey-darkest font-medium">Levitating</h3>
                      <p className="text-sm text-grey mt-1">Dua Lipa</p>
                    </div>
                    <div className="text-red-lighter">
                      <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" /></svg>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-8">
                    <div className="text-grey-darker">
                      <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z" /></svg>
                    </div>
                    <div className="text-grey-darker">
                      <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z" /></svg>
                    </div>
                    <div className="text-black p-8 rounded-full bg-red-light shadow-lg">
                      <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" /></svg>
                    </div>
                    <div className="text-black">
                      <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z" /></svg>
                    </div>
                    <div className="text-black">
                      <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4a2 2 0 0 0-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 0 1-2 2H6l2-2h7V8z" /></svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-8 py-4 ">
                <div className="flex justify-between text-sm text-black">
                  <p>0:40</p>
                  <p>4:20</p>
                </div>
                <div className="mt-1">
                  <div className="h-1 bg-black-dark rounded-full">
                    <div className="w-1/5 h-1 bg-black-light rounded-full relative">
                      <span className="w-4 h-4 bg-black absolute pin-r pin-b -mb-1 rounded-full shadow"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>  
            </div>
            <div class="col-span-12 rounded-lg border border-gray-500 bg-gray-200 p-32 sm:col-span-4">

            </div>
            <div class="footer col-span-12 rounded-lg border border-gray-800 bg-sky-700 p-6">
            </div>
          </div>
        </div> */}
        <div className='bg-red-700 w-4/5 h-4/5 mt-4 ml-32'>
           
        </div>
        <div className=" w-full h-[100px] bg-[black]  absolute bottom-0 flex justify-center items-center text-[white] flex-col">
  <input
    type="range"
    name="range"
    className="@apply w-[80vw] cursor-pointer"
    min={0}
    defaultValue={0}
    max={100}
  />
  <div className=" mt-2 flex ">
  <BiSkipPreviousCircle className='mr-2 w-11 h-11'/>
  <BsPlayCircle className='mr-2 w-11 h-11'/>
  <BiSkipNextCircle className='mr-2 w-11 h-11'/>
    
  </div>
</div>
      </div>
  )
}

export default Home
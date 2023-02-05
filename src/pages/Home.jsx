import React from 'react'
import { useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
// import Webcam from 'react-webcam'


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

        {/* <div className=''> < Webcam className='rounded-full h-50 w-40 ml-auto mr-auto align-item centre border-slate-500 bg-red-700'/></div> */}
        <div className="w-screen h-64 " >

          <div class=" my-52 grid max-w-8xl grid-cols-12 gap-4 p-1 bg-amber-200 ">

            <div class="header col-span-12 rounded-lg border border-gray-300 bg-sky-600 py-8">

            </div>
            <div class=" col-span-12 rounded-lg border border-gray-500 bg-gray-200 p-44 sm:col-span-8">

            </div>
            <div class="col-span-12 rounded-lg border border-gray-500 bg-gray-200 p-32 sm:col-span-4">

            </div>
            <div class="footer col-span-12 rounded-lg border border-gray-800 bg-sky-700 p-6">
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home
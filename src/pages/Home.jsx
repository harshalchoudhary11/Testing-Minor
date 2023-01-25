import React from 'react'
import { useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'

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
    loading ? <Loader className="h-screen" /> :
      (<div>
        <div class="bg-white overflow-hidden">
          <header id="page-header" class="flex flex-none items-center bg-white py-10">
            <div class="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-10">
              <div>
                <a href="javascript:void(0)" class="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-blue-600 hover:text-blue-400">
                  <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="opacity-75 hi-outline hi-cube-transparent inline-block w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
                  <span>Company</span>
                </a>
              </div>
              <div class="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 md:space-x-10">
                <nav class="space-x-4 md:space-x-6">
                  <a href="javascript:void(0)" class="font-semibold text-gray-900 hover:text-gray-500">
                    <span>Features</span>
                  </a>
                  <a href="javascript:void(0)" class="font-semibold text-gray-900 hover:text-gray-500">
                    <span>Pricing</span>
                  </a>
                  <a href="javascript:void(0)" class="font-semibold text-gray-900 hover:text-gray-500">
                    <span>Support</span>
                  </a>
                </nav>
                <div class="flex items-center justify-center space-x-2">
                  <a href="javascript:void(0)" class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="opacity-50 hi-solid hi-login inline-block w-5 h-5"><path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Sign In</span>
                  </a>
                  <a href="javascript:void(0)" class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                    <span>New Account</span>
                  </a>
                </div>
              </div>
            </div>
          </header>

          <div class="flex flex-col lg:flex-row-reverse space-y-16 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
            <div class="lg:w-1/2 lg:flex lg:items-center">
              <div>
                <div class="font-semibold inline-flex px-2 py-1 leading-4 mb-2 text-sm rounded text-emerald-700 bg-emerald-200">
                  New dashboard is live!
                </div>
                <h1 class="text-3xl md:text-4xl font-extrabold mb-4">
                  Premium leads for all your SaaS projects
                </h1>
                <h2 class="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">
                  Focus on building your amazing service and we will do the rest. We grew more than 10,000 online businesses.
                </h2>
                <div class="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
                  <a href="javascript:void(0)" class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700">
                    <span>Join us today</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="opacity-50 hi-solid hi-arrow-right inline-block w-5 h-5"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                  <a href="javascript:void(0)" class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-gray-200 bg-gray-200 text-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-300 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-200 active:border-gray-200">
                    <span>Start a 30-day trial</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="lg:w-1/2 lg:mr-16 lg:flex lg:justify-center lg:items-center">
              <div class="lg:w-96 relative">
                <div class="absolute pattern-dots-xl text-blue-100 top-0 left-0 w-32 h-48 md:h-96 transform -translate-y-12 -translate-x-16 -rotate-3"></div>
                <div class="absolute pattern-dots-xl text-blue-100 bottom-0 right-0 w-32 h-48 md:h-96 transform translate-y-12 translate-x-16 rotate-3"></div>
                <div class="absolute rounded-full top-0 right-0 w-32 h-32 bg-yellow-200 bg-opacity-50 -mt-12 -mr-12"></div>
                <div class="absolute rounded-xl bottom-0 left-0 w-32 h-32 bg-blue-200 bg-opacity-50 -mb-10 -ml-10 transform rotate-3"></div>
                <img src="https://cdn.tailkit.com/media/placeholders/photo-MChSQHxGZrQ-800x1000.jpg" alt="Hero Image" class="relative rounded-lg mx-auto shadow-lg"/>
              </div>
            </div>
          </div>

        </div>
      </div>)
)
}

export default Home
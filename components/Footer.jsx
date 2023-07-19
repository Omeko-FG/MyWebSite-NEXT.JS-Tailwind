import React from 'react'

const Footer = () => {
  return (
    <div class="h-44 bg-teal-900">
        <div class="flex justify-center h-[1px] mx-16 mb-10  bg-white"></div>
        <div class="flex justify-center text-white mb-4">© 2023 Devfolio. All rights reserved. Licensing.</div>
        <div class="flex justify-center items-center text-white"><span class="mr-4">Make With</span>    <svg className="w-[20px] h-[20px]  mt-1 text-red-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
    <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z"/>
  </svg></div>
    </div>
  )
}

export default Footer
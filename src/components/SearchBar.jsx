import React from 'react'
import { AiOutlineGoogle } from 'react-icons/ai'

export default function SearchBar() {

  return (
    <div className='flex text-white col-span-1 justify-center items-center'>
        <form role="search" method="get" id="searchform" class="searchform" action="https://www.google.com/search?hl=en-GB&source=hp&q=" target="_blank">
          <span className='flex flex-row justify-center items-center'>
            <AiOutlineGoogle size={30} className="mr-2 text-slate-400 animate-pulse-slow"/>
            <input type="text" autocomplete="off" name="q" className='font-lato text-lg bg-gray-800/80 text-white rounded-xl px-4 py-1 shadow-lg shadow-gray-400 justify-center items-center focus:outline-none'></input>
          </span>
        </form>
    </div>
  )
}
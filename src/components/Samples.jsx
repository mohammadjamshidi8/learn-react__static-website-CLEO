import React from 'react'

export default function Samples({image,title,sub}) {

    console.log(image);

  return (
    <div className='w-full flex justify-center mx-auto'>
        <div className={`${image} w-full aspect-square bg-cover rounded-lg m-5 overflow-hidden transition duration-300 delay-100 hover:scale-105 cursor-pointer group`}> 
            <div className='opacity-0 transition-all duration-300 delay-100 group-hover:opacity-100 flex flex-col w-full h-full justify-center items-center group-hover:bg-black  group-hover:bg-opacity-40 text-white text-2xl gap-y-2'>
            <span>{title}</span>
            <span className='text-sm font-thin'>{sub}</span>
            </div>
        </div>
    </div>
  )
}

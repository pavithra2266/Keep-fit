import React from 'react'

export default function SectionWrapper(props) {
  const {children, header,title, id}=props
  return (
    <section id={id} className='min-h-screen flex flex-col '>
      <div className='flex flex-col justify-center items-center  bg-slate-950 py-10 text-white p-4'>
      < p className='uppercase font-medium'>{header}</p>
        <h1 className='uppercase font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-8'>{title[0]} <span className='uppercase text-blue-400'> {title[1]} </span>{title[2]}</h1>
      </div>
      <div className='max-w-[800px] w-full flex flex-col mx-auto gap-10 py-14'>
      
        {children}
      </div>
    </section>
  )
}

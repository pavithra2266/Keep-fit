import React from 'react'


export default function Hero() {
    const handleAccept=(()=>{
       window.location.href="#generate"
    })
  return (
    <div className='min-h-screen flex flex-col items-center  justify-center text-white gap-8 text-center max-w-[800px] w-full mx-auto p-4'>
       <div className='flex flex-col gap-5'>
        <p>IT'S TIME TO GET</p>
        <h1 className='font-bold text-4xl lg:text-6xl md:text-5xl sm:text-4xl '><span>FIT </span>AND <span>HEALTHY</span> BODY</h1>
        </div>
        <p className='text-sm md:text-base font-light'>Members are expected to maintain <span >respectful behavior </span>towards staff and other members. Harassment, discrimination, or disruptive behavior will not be tolerated.
        The gym reserves the right to suspend or terminate a <span>membership</span>.</p>
        <button onClick={ handleAccept} className='px-8 py-4 rounded-3xl border bg-slate-900 border-blue-400 border-solid duration-200  ShadowBtn'>
            <p className='hover:text-blue-400'>Accept & Begin</p>
            </button>
    </div>
  )
}

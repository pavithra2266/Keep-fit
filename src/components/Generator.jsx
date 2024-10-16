import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/Exercises'
// import { WORKOUTS } from '../utils/Exercises'

function Header(props){
const {index,title,description}=props

return(
  <div className='flex flex-col gap-4'>
    <div className='flex items-center justify-center gap-2'>
      <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
      <h4 className='text-xl sm:text-2xl md:text-3xl '>{title}</h4>
    </div>
    <p className='text-sm sm:text-base mx-auto'>{description}</p>
  </div>
)
}
export default function Generator(props) {
  const{muscles, setMuscles, poison, setPoison, goal, setGoal, updateWorkout}=props
   const [showModal, setShowModal] = useState(false)
  
  function togggleModal(){
    setShowModal(!showModal);
  }
  function updateMusecles(muscleGroup){
    if ((muscles.includes(muscleGroup))){
      setMuscles(muscles.filter(val =>val !== muscleGroup))
      return
    }
    if(muscles.length>3){
      setShowModal(false)
      return
    }
    if(poison !== 'individual'){
      setMuscles([muscleGroup])
      setShowModal(false)
      return
    }
    setMuscles([...muscles,muscleGroup])
    if (muscles.length === 2) {
      setShowModal(false)
  }

  }
  return (
  <SectionWrapper id={'generate'} header={"generate your workout"} title={['It\'s', 'Huge', 'o\'clock']}>
    <Header index={'01'} title={'Pick your poison'} description={"Select the workout you wish to endure."} />
    <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
    {Object.keys(WORKOUTS).map((type, typeIndex) => {
     return( 
     <button key={typeIndex} 
     onClick={()=>{
     
      setPoison(type)
      setMuscles([])
     }}
     className={'bg-slate-950 border  border-blue-400 duration-200 rounded-lg mx-2 py-3  hover:border-blue-600 hover:bg-slate-900 '+ (type === poison ? ' border-blue-600' : ' border-blue-400')} >
      <p className='capitalize'>{type.replaceAll('_'," ") }</p>
      </button>
        )
      })}
    </div>
    <Header index={'02'} title={'Lock on target'} description={"Select the muscles judged for annihilation"} />
    <div className='flex flex-col bg-slate-950 p-4 border border-blue-400 rounded-lg border-solid'>
      <button onClick={togggleModal} className='relative flex items-center justify-center' >
        <p className='capitalize'>{muscles.length == 0 ? 'Select muscle groups' : muscles.join(' ')}</p>
        <i className="fa-solid fa-caret-down absolute top-1/2 -translate-y-1/2 right-3"></i>
      </button>
      {showModal && 
      <div className='flex flex-col items-center justify-center'>
      {(poison === 'individual' ? WORKOUTS[poison] :Object.keys(WORKOUTS[poison])).map((muscleGroup,muscleGroupIndex)=>{
        return(
          <button onClick={()=>{
            updateMusecles(muscleGroup)
          }} key={muscleGroupIndex} className={'hover:text-blue-400 duration-200 ' + (muscles.includes(muscleGroup) ? ' text-blue-400' : ' ')}>
            <p className={'hover:text-blue-400'+ (muscles.includes(muscleGroup) ? ' text-blue-400' : ' ')}>{muscleGroup}</p>
          </button>
        )
      })}
      </div>
      }
  </div>
    <Header index={'03'} title={'Become Juggernaut'} description={"Select your ultimate objective"} />
    <div className='grid grid-cols-1 sm:grid-cols-3  gap-4'>
    {Object.keys(SCHEMES).map((schemes, schemesIndex) => {
     return( 
      <button key={schemesIndex} 
      onClick={()=>{
       setGoal(schemes)
      }}
      className={'bg-slate-950 border  border-blue-400 duration-200 rounded-lg mx-2 py-3  hover:border-blue-600 hover:bg-slate-900 '+ (schemes === goal ? ' border-blue-600' : ' border-blue-400')} >
       <p className='capitalize'>{schemes.replaceAll('_'," ") }</p>
       </button>
        )
      })}
       
    </div>
    <button onClick={updateWorkout} className='mx-auto px-8 py-4 rounded-3xl border bg-slate-900 border-blue-400 border-solid duration-200  ShadowBtn '>
            <p className='hover:text-blue-400'>Formulate</p>
            </button>
  </SectionWrapper>
  )
}

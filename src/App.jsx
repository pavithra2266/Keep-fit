import React, { useState } from 'react'
import Workout from './components/Workout'
import Hero from './components/Hero'
import Generator from './components/Generator'
import { generateWorkout } from './utils/Functions'

const App = () => {
  const[workout,setWorkout]= useState(null)
  const [poison, setPoison] = useState('individual')
  const [goal, setGoal] = useState('strength_power')
  const [muscles,setMuscles]=useState([])

  function updateWorkout(){
    if(muscles.length<1){
      return
    }
    let newWorkout=generateWorkout({poison,muscles,goal})
     setWorkout(newWorkout)
       window.location.href="#workout"
  }
  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950'>
    < Hero/>
    < Generator  poison={poison}
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}/> 
   {workout && <Workout workout={workout} id={workout} />}
  
    </div>
  )
}

export default App

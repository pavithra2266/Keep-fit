import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

export default function Workout(props) {
  const{workout}=props
  return (
    <div>
       <SectionWrapper id={'workout'} header={"Welcome to "} title={['The', 'DANGER', 'Zone']}>
        <div>
          {workout.map((exercise,i)=>{
            return(
              <ExerciseCard key={i} exercise={exercise} i={i}/>
            )
          })}
        </div>
       </SectionWrapper>
    </div>
  )
}

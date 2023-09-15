import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import Selected from './Components/Selected/selected'

function App() {
  const [selectcourse, setSelectcourse] = useState([])

  const handleSelectCourse = course => {
    const alreadySelect = selectcourse.find(data => data.id === course.id)

    let count = course.course_time;
    if(alreadySelect){
      return alert('Already selected')
    }else{

      selectcourse.forEach(item =>{
        count = count + item.course_time
      })
console.log(count);
      if(count>20){
        return alert('can not select')
      }
      else{

        const newSelect = [...selectcourse, course]
      setSelectcourse(newSelect)
      }
    }
    
    
  }

  return (
    <>
      
      <h1 className='text-3xl font-bold text-[#1C1B1B] text-center my-8'>Course Registration</h1>
      <div className='container mx-auto gap-3 flex'>
        <Courses handleSelectCourse={handleSelectCourse}></Courses>
        <Selected selectcourse={selectcourse} ></Selected>
      </div>
      
    </>
  )
}

export default App

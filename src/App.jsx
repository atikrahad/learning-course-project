import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import Selected from './Components/Selected/selected' 

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [selectcourse, setSelectcourse] = useState([])

  const handleSelectCourse = course => {
    const alreadySelect = selectcourse.find(data => data.id === course.id)

    let count = course.course_time;
    if(alreadySelect){
      return toast.error('Allready selected', {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }else{

      selectcourse.forEach(item =>{
        count = count + item.course_time
      })
console.log(count);
      if(count>20){
        return toast.error("Haven't much remaining time", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
      else{
        toast.success(`Selected ${course.title}`, {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        const newSelect = [...selectcourse, course]
      setSelectcourse(newSelect)
      }
    }
    
    
  }

  return (
    <>
      
      <h1 className='text-3xl font-bold text-[#1C1B1B] text-center my-8'>Course Registration</h1>
      <div className='container mx-auto pb-4 gap-3 flex'>
        <Courses handleSelectCourse={handleSelectCourse}></Courses>
        <Selected selectcourse={selectcourse} ></Selected>
        <ToastContainer></ToastContainer>
      </div>
      
    </>
  )
}

export default App

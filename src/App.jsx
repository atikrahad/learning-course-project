import './App.css'
import Courses from './Components/Courses/Courses'

function App() {

  return (
    <>
      
      <h1 className='text-3xl font-bold text-[#1C1B1B] text-center my-8'>Course Registration</h1>
      <div className='container mx-auto flex'>
        <Courses></Courses>
      </div>
      
    </>
  )
}

export default App

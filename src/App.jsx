import { useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'
import { MdDarkMode, MdLightMode } from 'react-icons/md';

function App() {
const [theme,setTheme] = useState("dark");

  return (
    <>
      <div className={`${theme === 'dark' ? "bg-black text-white" : 'bg-white text-black'} w-screen relative h-screen flex justify-start flex-col items-center text-2xl theme`} >
       <AddTodo/>
       <Todos/>
       <div className='fixed top-3 md:top-8 right-4 md:right-8'>
      {theme === "dark"? <MdDarkMode onClick={()=>setTheme(prevTheme =>prevTheme==='dark' ? 'light'  :'dark')} size={30}  /> : <MdLightMode onClick={()=>setTheme(prevTheme =>prevTheme==='light' ? 'dark'  :'light')} size={30} />}
       </div>
      </div>
    
    </>
  )
}

export default App

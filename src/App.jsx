import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { apiUrl, filterData } from "./data";
import { Navbar } from "./components/Navbar";
import { Filter } from "./components/Filter";
import { Cards } from "./components/Cards";
import { toast } from 'react-toastify';
import { Spinner } from './components/Spinner';


function App() {
  // const [text, setText] = useState('')

  // // variation 1 => every render
  // useEffect( ()=> {
  //   console.log("run every time this module run for changing useState variable");
  // })

  // // variation 2 => First render
  // useEffect( ()=> {
  //   console.log("For only first time this module run");
  // }, [])

  // // variation 3 => First render + whenever dependency value changes
  // useEffect( ()=> {
  //   console.log("run for the first time and also according to changes on mentioned dependency");
  // }, [text])

  // // variation 4 => To handle unmounting/un-rendering of a component
  // useEffect( ()=> {
  //   // add event lister
  //   console.log("Listener added");
  //   return () => {
  //     console.log("Listener Removed");
  //   }
  // }, [text])

  // function changeHandler(event) {
  //   setText(event.target.value);
  //   console.log(text);
  // }

  const [courses, setCourses] = useState(null)
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState(filterData[0].title)

  async function fetchData() {
    setLoading(true)
    try {
      const res = await fetch(apiUrl);
      const data =await res.json();
      // save data into a variable
      console.log(data);
      setCourses(data.data)
    } catch (error) {
      toast.error("Error: "+ error.message)
    }
    setLoading(false)
  }

  useEffect( ()=> {
    fetchData();

  }, [])

  return (
    <>
      <div className='min-h-screen w-screen flex flex-col bg-bgDark2'>
        <Navbar/>

        <div className='bg-bgDark2'>
          <Filter filterData={filterData} category={category} setCategory={setCategory}/>
          <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
            {loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)}
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App

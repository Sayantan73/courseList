import React from 'react'

export const Filter = ({filterData, category, setCategory}) => {
  function filterHandler(title) {
    setCategory(title)
  }
  return (
    <div className='flex flex-wrap justify-center w-11/12 max-w-max space-x-4 gap-y-4 py-4 mx-auto'>
        {filterData.map( (data)=> {
            return <button className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 
            ${category === data.title ? "bg-opacity-60 border-white" : "bg-opacity-50 border-transparent"} 
            transition-all duration-300`}
             key={data.id} onClick={()=>filterHandler(data.title)}>{data.title}</button>
        })}
    </div>
  )
}

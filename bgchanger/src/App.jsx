import { useState } from 'react'

function App() {
  const [color, setColor] = useState("#E3FDFD")
  return (
    <>
    <div className='w-full h-screen duration-200"
    ' style={{backgroundColor: color}}>
      <h1 className="text-4xl text-center font-bold" style={{color: "#3F72AF"}}>BG Color Changer</h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <button
      onClick={()=>{setColor('black')}}
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mr-5"
      >
        Black
      </button>
      <button
      onClick={()=>{setColor('red')}}
    type="button"
    className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 mr-5"
  >
    Red
  </button>
      <button
      onClick={()=>{setColor('green')}}
        type="button"
        className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 mr-5"
      >
        Green
      </button>
      </div>
    </div>
    </>
  )
}

export default App

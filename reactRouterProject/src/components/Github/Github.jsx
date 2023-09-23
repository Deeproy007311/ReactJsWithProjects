// import React from 'react'

import { useEffect, useState } from "react"

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/Deeproy007311')
      .then((response)=> response.json())
      .then((data)=>{
            console.log(data);
            setData(data)
      })
    }, [])
    
  return (
    <>
    <h1 className="text-center">GitHub Name: {data.login}</h1>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers:{data.followers}
    <img src={data.avatar_url} alt="Profile_picture" />
    
     </div>


    </>
  )
}

export default Github
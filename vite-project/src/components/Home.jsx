import React from 'react'

const Home = () => {

  const getData = async () =>{
    const x = await fetch("'https://jsonplaceholder.typicode.com/posts/1'")
    console.log(x);
  }
  
  return (
    <div>
      <div className="flex gap-4 px-40 py-10 bg-[#FAEBD7] ">
            <button onClick={getData} >GetData</button>
      </div>
    </div>
  )
}

export default Home

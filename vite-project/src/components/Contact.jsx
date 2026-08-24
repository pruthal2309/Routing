import React, { useEffect, useState } from 'react'

const Contact = () => {

  const [A, setA] = useState(0)
  const [B, setB] = useState(0)

  const AChanging = () => {
    console.log("A is Changing...")
  }

  const BChanging =() => {
    console.log("B is Changing...")
  }

  useEffect(function() {
    AChanging()
  }, [A])

  useEffect(function() {
    BChanging()
  }, [B])

  return (
    <div>
      <h1>A is {A}</h1>
      <h2>B is {B}</h2>

      <button className="mt-4 px-2 py-2 bg-blue-500 text-white rounded"  onClick={()=>{
        setA(A+1)
      }}>Increase A</button>

      <button className="mt-4 px-2 py-2 bg-blue-500 text-white rounded" onClick={() => {
        setB(B-1)
      }}>Increase B</button>
    </div>
  )
}

export default Contact

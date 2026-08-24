import React, {useState} from 'react'
import axios from 'axios'

const About = () => {

  const [data, setData] = useState([])

  const getData = async () => {
    const x = await axios.get('https://picsum.photos/v2/list')
    setData(x.data);
  }
  return (
    <div>
      <div className="flex gap-4 px-40 py-10    bg-[#FAEBD7]">
        <button onClick={getData} > get Data</button>
        <div>
            {data.map(function (elem, idx){
                // alert("Hi")
                return (<h1>Hello {idx}</h1>)
            })}
        </div>
      </div>
    </div>
  )
}

export default About

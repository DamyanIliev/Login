import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-orange-500 h-screen w-screen'>
     <h1 className='text-blue-700 font-bold first-letter:text-green-700 text-3xl'>App</h1>
    </div>
  )
}

export default App

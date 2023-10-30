import { useState } from 'react'
import TagsInput from './components/TagsInput'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>Enter Some Tags ...</h2>
      <TagsInput />
    </div>
  )
}

export default App

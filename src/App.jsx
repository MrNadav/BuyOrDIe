import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import tailwindConfig from '../tailwind.config'
import {Home, Expenses, Header, Income} from './components'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/income" element={<Income />} />
    </Routes>
    </>
  )
}

export default App

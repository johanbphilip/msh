import { Link } from 'react-router'
import './App.css'
import Header from './components/Header'
import { Button } from './components/ui/button'

function App() {

  return (
    <main className="flex flex-col gap-6 w-screen h-screen items-center justify-center">
      <div className='grid grid-cols-3 gap-10 '>
        <Button variant="link" className='border border-gray-300 rounded-lg p-4'><Link to="/prospective-student">Prospective Students</Link></Button>
        <Button variant="link" className='border border-gray-300 rounded-lg p-4'><Link to="/new-student">New Student</Link></Button>
        <Button variant="link" className='border border-gray-300 rounded-lg p-4'><Link to="/current-student">Current Student</Link></Button>
      </div>
    </main>
  )
}

export default App

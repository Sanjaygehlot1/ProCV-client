import './App.css'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
function App() {

  return (
    
    <div className = "w-full min-h-screen">
      <Toaster position="bottom-right" reverseOrder={false} />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App

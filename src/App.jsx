import './App.css'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
function App() {

  return (
    <div>
      <Toaster position="bottom-right" reverseOrder={false} />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App

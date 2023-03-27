import { Button, Spinner } from "flowbite-react"
import Nav from "./components/Nav.jsx"

function App() {
  return (
    <div>
      <Nav/>
     <div className="flex h-screen justify-center items-center bg-gradient-to-t from-yellow-600 to-black">
            <Spinner aria-label="Center-aligned Spinner button example" />
            <span className="pl-3">
              Loading...
            </span>
     </div>
    </div>
  )
}

export default App

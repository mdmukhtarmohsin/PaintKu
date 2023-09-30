import { InspirationContent } from './Components/InspirationContent'
import TopHome from './Components/TopHome'
import "./App.css"
import { Products } from './Pages/Products'
import Signup from './Pages/Signup'
import Login from './Pages/Login'

function App() {
  return (
    <div>
      <TopHome />
      <Products/>
      <InspirationContent/>

      
     
      <Signup/>
      <Login/>

    </div>
  )
}

export default App

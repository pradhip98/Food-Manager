import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Layout from './layout'
import Home from './home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Food-Manager' element={<Layout />}>
          <Route path='' element={<Home />}></Route>
        </Route>
      </Routes>
    </Router>
    )
}

export default App
import React from 'react'
import MainPage from './components/MainPage'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';


const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
    </Routes>
   </Router>
  )
}

export default App
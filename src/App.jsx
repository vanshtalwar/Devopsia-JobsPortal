import React from 'react'

import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import AddJobPage from './pages/AddJobPage'
import JobPage from './pages/JobPage'


const App = () => {
  return (
    <>
    <Navbar />

    <Routes>

    <Route path="/" element={<HomePage/>}/>
    <Route path="/jobs" element={<JobsPage/>}/>
    <Route path="/jobs/:id" element={<JobPage/>}/>
    <Route path="/add-job" element={<AddJobPage/>}/>
    <Route path="*" element={<NotFoundPage/>}/>

    
    </Routes>
    </>
  )
}

export default App
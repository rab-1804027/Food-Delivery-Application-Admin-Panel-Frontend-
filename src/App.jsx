import React from 'react'
import Sidebar from './components/Sidebar'
import Menubar from './components/Menubar'
import ListFood from './pages/ListFood';
import AddFood from './pages/AddFood';
import Orders from './pages/Orders';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  }

  return (
    <div className="d-flex" id="wrapper">
        <Sidebar sidebarVisible={sidebarVisible}/>
        <div id="page-content-wrapper">
            <Menubar toggleSidebar={toggleSidebar}/>
            <div className="container-fluid">
                <Routes>
                    <Route path='/' element={<ListFood/>}/>
                    <Route path='/add' element={<AddFood/>}/>
                    <Route path='/list' element={<ListFood/>}/>
                    <Route path='/orders' element={<Orders/>}/>
                </Routes>
            </div>
        </div>
    </div>
  )
}

export default App
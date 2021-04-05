import {useState} from 'react';

import {BrowserRouter} from 'react-router-dom'

import Navbar from './components/navbar/Navbar';

import Sidebar from './components/sidebar/Sidebar';

import Footer from './components/footer/Footer';

import Routes from './Routes'
import './App.css';



const App = () => {

  const  [ sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () =>{
    setSidebarOpen(true);
  };
  const closeSidebar = () =>{
    setSidebarOpen(false);
  };

  return (
    

    <div className="container">
      <BrowserRouter>

      <Routes/>
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      
      <Footer sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
      </BrowserRouter>
      
      
      
    </div>
    

    
    
  );
}

export default App;

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
   
  return (
    <div>
      <Navbar/>
      <Footer/>
        <ToastContainer />
    </div>
  );
};

export default App;
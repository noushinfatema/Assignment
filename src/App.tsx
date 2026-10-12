
// import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';


const App = () => {
   
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Footer/>
        {/* <ToastContainer /> */}
    </div>
  );
};

export default App;
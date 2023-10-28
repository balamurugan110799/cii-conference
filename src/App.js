import logo from './logo.svg';
import './App.css';
import Navbar from './Layout/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./Components/CSS/style.css"
import Home from './Pages/Home';
import Footer from './Layout/Footer';
import "./Components/CSS/responsive.css"
import PageNotFound from './Layout/PageNotFound';
import ThankYou from './Layout/ThankYou';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nhec" element={<Home />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path='*'  element={<PageNotFound/>}/>

        </Routes>
      </BrowserRouter>
      {/* <Navbar /> */}
      {/* <Home/> */}




      {/* <div className=' container mx-auto'>
      <p className='mt-6 title text-left text-yellow font-medium	 text-h1 leading-[44px]'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      </p>
      <p className='mt-6 title text-left text-primary text-h1 leading-[44px]'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      </p>

      <p className='mt-6 title text-left text-[#4f4f4f] text-h1 leading-[44px]'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      </p>

      <p className='mt-6 title text-left text-[#363636] text-h1 leading-[44px]'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      </p>

      <p className='pt-4  text-left text-[18px] text-[#686868]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div> */}

    </div>
  );
}

export default App;

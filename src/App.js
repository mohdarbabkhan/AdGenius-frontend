import React from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import bgImage from './images/bg2.jpg'
import Footer from './components/Footer';


function App() {
  const bodyStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    
  };
  return (
    <div  style={bodyStyle}>
    <Navbar />
    <Form/>
    <Footer/>
    </div>
  );
}

export default App;

import React, {Component} from 'react';
import Particles from 'react-tsparticles';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';


const particlesOptions = {
  particles: {
    color: {
      value: "#FFFEFE"
    },
    links: {
      enable: true,
      color: "#FFFEFE",
      distance: 250
    },
    move: {
      enable: true
    }
  }
}
class App extends Component{
  render(){
  return (
    <div className="App">
      <Particles className='particles'
              params={particlesOptions}
             
            />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
     {/* <Logo />
      <ImageLinkForm />
      <FaceRecognition /> */}
      
      
    </div>
  );
}
}

export default App;

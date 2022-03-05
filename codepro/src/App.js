import React, {Component} from 'react';
import Particles from 'react-tsparticles';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
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
  constructor() {
    super();
    this.state = initialState;
  }


  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    fetch('https://calm-lowlands-63429.herokuapp.com/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          input: this.state.input,
          
      })

    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('https://calm-lowlands-63429.herokuapp.com/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.state.user.id,
                
            })

          })

            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, {entries: count}))
            })
            .catch(console.log)
        }
        
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));

  }


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
     <FaceRecognition />
      
      
    </div>
  );
}
}

export default App;

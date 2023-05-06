import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import React, { Component } from 'react'
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {

  state = {
    progress : 0 
  }
  setProgress =(progress)=>{
    this.setState({progress : progress})
  }
  render() {
    return (
      <>
      
      <Navbar/>
      <LoadingBar
      height={3}
        color='#f11946'
        progress={100}
        
      />
      {/* progress={0} */}
      <News country="in" category='General'/>
      
      </>

    )
  }
}




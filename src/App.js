import React, {Component} from 'react';
import IdBox from './components/IdBox';
import './App.css';
import {logo} from './logo.svg';

class App extends Component {
  render (){
  return (
    <div className="App">
      <div style={ {backgroundColor:"orange" }}>
      <h1 style={{textAlign:"center"}}> Cars</h1>
       
      <IdBox image="https://images.hgmsites.net/lrg/mercedes-benz-s-class_100644973_l.jpg" description="description 11"  title="luxe"></IdBox>
      <IdBox image="https://cdn.motor1.com/images/mgl/0beAj/s1/2019-bmw-m2-competition.jpg" description="BMW"  title="sport carr"></IdBox>
      <IdBox image="https://img.autoplus.fr/news/2019/04/25/1537990/1200%7C800%7Ce5fd82e6ed656a3c5632b63c.jpg" description="Volvo"  title="Safe car"></IdBox>
      <IdBox image="https://i.ytimg.com/vi/Lg9_7OHcOp8/maxresdefault.jpg" description="description 11"  title="Mafia car"></IdBox>

</div>
    </div>
    
  );
  }
}

export default App;

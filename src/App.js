// import './App.css';
import {PopTartCard} from './component/PopTartCard/PopTartCard.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Doro from './common/image/doro.jpg'
import Kitfo from './common/image/kitfo.jpg'
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chomps : 0
    }
    this.chomp = this.chomp.bind(this);
  }

  chomp(){
    this.setState({chomps: this.state.chomps + 1})
  }

  render() {
    
    return (
      <div>
     
      <div className="d-flex flex-wrap justify-content-evenly">
        <PopTartCard 
        name="Doro wet"
        calories= {5000}
        isFrosted={false}
        img= {Doro}
        chompIt={this.chomp}
        />
       
       <PopTartCard 
        name="Kitfo"
        calories= {5000}
        isFrosted={true}
        img={Kitfo}
        chompIt={this.chomp}
        />
       <PopTartCard 
        name="Kitfo"
        calories= {5000}
        isFrosted={true}
        img={Kitfo}
        chompIt={this.chomp}
        />
      </div>
      <h2 className='text-center text-danger'>Total Food : {this.state.chomps}</h2>
      </div>
    );
  }
}

export default App;

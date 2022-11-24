import React, { Component } from 'react'

export class PopTartCard extends Component {
  constructor(props) {
    super(props);
    this.state={
      bites : 0
    }

    this.handleBite = this.handleBite.bind(this)
   }

   handleBite(){
    console.log(this);
   this.setState({bites:this.state.bites + 1})
   this.props.chompIt();
   }
  render() {
    const {name, calories, isFrosted, img} = this.props
    return (
      
        <div className='card col-3 text-center'>
          <img src={img} alt={this.name} />
            <div className='card-body'>
                <h3 className="card-title">{name}</h3>
                <p className="card-text">Calories: {calories}</p>
                <p className="card-text">IsFrosted: {isFrosted ? 'yes':'no'}</p>
                <p className="card-text"># of Bites : {this.state.bites}</p>
                <button onClick={this.handleBite}>Bite</button>
            </div>
        </div>
    
    )
  }
}


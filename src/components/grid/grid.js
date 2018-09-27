import React from "react";
import mole from "../../../public/icons/mole.jpg";
import hole from "../../../public/icons/hole.png";

class Grid extends React.Component {
  
  state = {
    mole1: 'mole',
    mole2: 'mole',
    mole3: 'mole',
    mole4: 'mole',
    mole5: 'mole',
    mole6: 'mole',
    mole7: 'mole',
    mole8: 'mole',
    mole9: 'mole',
  }
  whacked1 = () => {
    console.log('workin');
    if(this.state.mole1 === 'mole');
    this.setState({mole1: "hiddenMole"});
  }
  whacked2 = () => {
    console.log('workin');
    if(this.state.mole2 === 'mole');
    this.setState({mole2: "hiddenMole"});
  }
  whacked3 = () => {
    console.log('workin');
    if(this.state.mole3 === 'mole');
    this.setState({mole3: "hiddenMole"});
  }
  whacked4 = () => {
    console.log('workin');
    if(this.state.mole4 === 'mole');
    this.setState({mole4: "hiddenMole"});
  }
  whacked5 = () => {
    console.log('workin');
    if(this.state.mole5 === 'mole');
    this.setState({mole5: "hiddenMole"});
  }
  whacked6 = () => {
    console.log('workin');
    if(this.state.mole6 === 'mole');
    this.setState({mole6: "hiddenMole"});
  }
  whacked7 = () => {
    console.log('workin');
    if(this.state.mole7 === 'mole');
    this.setState({mole7: "hiddenMole"});
  }
  whacked8 = () => {
    console.log('workin');
    if(this.state.mole8 === 'mole');
    this.setState({mole8: "hiddenMole"});
  }
  whacked9 = () => {
    console.log('workin');
    if(this.state.mole9 === 'mole');
    this.setState({mole9: "hiddenMole"});
  }

  render() {
    return (
      <div className="grid-container">
        <div id="box-1">
          <div  className="mole-hole">
          {
            this.state.mole1 === 'mole' && (<img  onClick={this.whacked1}className={this.state.mole1} src={mole} />)
          }
            <img src={hole} />
          
          </div>
        </div>
        <div id="box-2">
          <div className="mole-hole">
          {
            this.state.mole2 === 'mole' && (<img  onClick={this.whacked2}className={this.state.mole2} src={mole} />)
          }
            <img src={hole} />
          </div>
        </div>
        <div id="box-3">
          <div className="mole-hole">
          {
            this.state.mole3 === 'mole' && (<img  onClick={this.whacked3}className={this.state.mole3} src={mole} />)
          }
            <img src={hole} />
          </div>
        </div>
        <div id="box-4">
          <div className="mole-hole">
          {
            this.state.mole4 === 'mole' && (<img  onClick={this.whacked4}className={this.state.mole4} src={mole} />)
          }
            <img src={hole} />
          </div>
        </div>
        <div id="box-5">
          <div className="mole-hole">
          {
            this.state.mole5 === 'mole' && (<img  onClick={this.whacked5}className={this.state.mole5} src={mole} />)
          }
            <img src={hole} />
          </div>
        </div>
        <div id="box-6">
          <div className="mole-hole">
          {
            this.state.mole6 === 'mole' && (<img  onClick={this.whacked6}className={this.state.mole6} src={mole} />)
          }
            <img src={hole} />
          </div>
        </div>
        <div id="box-7">
          <div className="mole-hole">
          {
            this.state.mole7 === 'mole' && (<img  onClick={this.whacked7}className={this.state.mole7} src={mole} />)
          }
            <img src={hole} />
          </div>
        </div>
        <div id="box-8">
          <div className="mole-hole">
          {
            this.state.mole8 === 'mole' && (<img  onClick={this.whacked8}className={this.state.mole8} src={mole} />)
          }
            <img src={hole} />
          </div>
        </div>
        <div id="box-9">
          <div className="mole-hole">
          {
            this.state.mole9 === 'mole' && (<img  onClick={this.whacked9}className={this.state.mole9} src={mole} />)
          }
            <img src={hole} />
          </div>
        </div>
      </div>
    );
  }
}

export default Grid;

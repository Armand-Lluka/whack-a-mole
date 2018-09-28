import React from "react";
import mole from "../../../public/icons/mole.jpg";
import hole from "../../../public/icons/hole.png";


class Grid extends React.Component {
  
  state = {
    mole1: 'hiddenMole',
    mole2: 'hiddenMole',
    mole3: 'hiddenMole',
    mole4: 'hiddenMole',
    mole5: 'hiddenMole',
    mole6: 'hiddenMole',
    mole7: 'hiddenMole',
    mole8: 'hiddenMole',
    mole9: 'hiddenMole',
    moletime: 300,
    mRunning: false,
    moleRay: ['mole1', 'mole2', 'mole3', 'mole4', 'mole5', 'mole6', 'mole7', 'mole8', 'mole9'],
    moleRay2: [],
  }
  moleSeconds = () => {
    return Math.floor(this.state.moletime/100);
  }
  moleMSeconds = () => {
    return ('0' + this.state.moletime%100).slice(-2);
  }
  moleSpawn = () => {
    const pos = Math.floor(this.state.moleRay.length * Math.random());
    let change = this.state.moleRay[pos];
    console.log("mr2", this.state.moleRay2)
    console.log("mr", this.state.moleRay)
    this.setState({moleRay: this.state.moleRay.filter(word =>  word!==change)});
    console.log(this.state.moleRay);
    
    console.log(this.state.moleRay2)
    this.setState({[change]: 'mole'});
  }
  moleTimer = () => {
    this.setState(prevState => {
      const _this = this;
        let startTime = Date.now() - prevState.moletime;
        let count = 50;
        let setTime = 300;
        this.moleTimer = setInterval(() => {
            
            if(_this.state.moletime>0 && count>0){
          this.setState({ moletime: Math.ceil(setTime- (Date.now() - startTime)/10) });
          console.log('success');
          
        }
        else {
            this.moleSpawn()
            console.log(Math.floor(this.state.moleRay.length * Math.random()));
            if(count !== 0){
            setTime = 50+150*Math.random();
            startTime =Date.now() - prevState.moletime;
            console.log(setTime);
            this.setState({moletime: setTime});
            }
        }
        
        }, 100);
      
      return { mRunning: !prevState.mRunning };
      }
    )
  }
  whacked1 = () => {
    console.log('workin');
    this.setState({mole1: "hiddenMole"});
    this.setState({moleRay: this.state.moleRay.concat('mole1')});
  }
  whacked2 = () => {
    console.log('workin');
    if(this.state.mole2 === 'mole');
    this.setState({mole2: "hiddenMole"})
    this.setState({moleRay: this.state.moleRay.concat('mole2')});;
  }
  whacked3 = () => {
    console.log('workin');
    if(this.state.mole3 === 'mole');
    this.setState({mole3: "hiddenMole"});
    this.setState({moleRay: this.state.moleRay.concat('mole3')});
  }
  whacked4 = () => {
    console.log('workin');
    if(this.state.mole4 === 'mole');
    this.setState({mole4: "hiddenMole"});
    this.setState({moleRay: this.state.moleRay.concat('mole4')});
  }
  whacked5 = () => {
    console.log('workin');
    if(this.state.mole5 === 'mole');
    this.setState({mole5: "hiddenMole"});
    this.setState({moleRay: this.state.moleRay.concat('mole5')});
  }
  whacked6 = () => {
    console.log('workin');
    if(this.state.mole6 === 'mole');
    this.setState({mole6: "hiddenMole"});
    this.setState({moleRay: this.state.moleRay.concat('mole6')});
  }
  whacked7 = () => {
    console.log('workin');
    if(this.state.mole7 === 'mole');
    this.setState({mole7: "hiddenMole"});
    this.setState({moleRay: this.state.moleRay.concat('mole7')});
  }
  whacked8 = () => {
    console.log('workin');
    if(this.state.mole8 === 'mole');
    this.setState({mole8: "hiddenMole"});
    this.setState({moleRay: this.state.moleRay.concat('mole8')});
  }
  whacked9 = () => {
    console.log('workin');
    if(this.state.mole9 === 'mole');
    this.setState({mole9: "hiddenMole"});
    this.setState({moleRay: this.state.moleRay.concat('mole9')});
  }

  render() {
    return (
      <div>
        <h1>{this.moleSeconds()}:{this.moleMSeconds()}</h1>
      <button onClick={this.moleTimer}>
        {this.state.running ? 'Pause' : 'Start'}
      </button>
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
      </div>
    );
  }
}

export default Grid;

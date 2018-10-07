import React from "react";
import mole from "../../../public/icons/mole.jpg";
import trump1 from "../../../public/image/trump1.png";
import trump2 from "../../../public/image/trump2.png";
import trump3 from "../../../public/image/trump3.png";
import trump4 from "../../../public/image/trump4.png";
import trump5 from "../../../public/image/trump5.png";
import trump6 from "../../../public/image/trump6.png";
import trump7 from "../../../public/image/trump7.png";
import trump8 from "../../../public/image/trump8.png";
import trump9 from "../../../public/image/trump9.png";
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
    score: 0,
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
  whacked = (e) => {
    const mNum = e.target.parentElement.parentElement.id.slice(-1)
    this.setState({['mole' + mNum]: "hiddenMole"});
    this.setState({moleRay: this.state.moleRay.concat('mole' + mNum)});
    this.setState({score: this.state.score + 1})
  }
  

  render() {
    return (
      <div id="background">
        <div id="score">
          <h2>{this.state.score}</h2>
        </div>
        
      <div className="grid-container">
      
        <div id="box-1">
          <div  className="mole-hole">
          {
            this.state.mole1 === 'mole' && (<img  onClick={this.whacked}className={this.state.mole1} src={trump1} />)
          }
            <img src={hole} />
          
          </div>
        </div>
        <div id="box-2">
          <div className="mole-hole">
          {
            this.state.mole2 === 'mole' && (<img  onClick={this.whacked}className={this.state.mole2} src={trump2} />)
          }
            <img src={hole} />
          </div>
        </div>
        <div id="box-3">
          <div className="mole-hole">
          {
            this.state.mole3 === 'mole' && (<img  onClick={this.whacked}className={this.state.mole3} src={trump3} />)
          }
            <img src={hole} />
          </div>
        </div>
        <div id="box-4">
          <div className="mole-hole">
          {
            this.state.mole4 === 'mole' && (<img  onClick={this.whacked}className={this.state.mole4} src={trump4} />)
          }
            <img src={hole} />
          </div>
        </div>
        <div id="box-5">
          <div className="mole-hole">
          {
            this.state.mole5 === 'mole' && (<img  onClick={this.whacked}className={this.state.mole5} src={trump5} />)
          }
            <img src={hole} />
          </div>
        </div>
        <div id="box-6">
          <div className="mole-hole">
          {
            this.state.mole6 === 'mole' && (<img  onClick={this.whacked}className={this.state.mole6} src={trump6} />)
          }
            <img src={hole} />
          </div>
        </div>
        <div id="box-7">
          <div className="mole-hole">
          {
            this.state.mole7 === 'mole' && (<img  onClick={this.whacked}className={this.state.mole7} src={trump7} />)
          }
            <img src={hole} />
          </div>
        </div>
        <div id="box-8">
          <div className="mole-hole">
          {
            this.state.mole8 === 'mole' && (<img  onClick={this.whacked}className={this.state.mole8} src={trump8} />)
          }
            <img src={hole} />
          </div>
        </div>
        <div id="box-9">
          <div className="mole-hole">
          {
            this.state.mole9 === 'mole' && (<img  onClick={this.whacked}className={this.state.mole9} src={trump9} />)
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

import React from 'react';
class Stuff extends React.Component {
  state = {
      running: false,
      mRunning: false,
      time: 120,
      moletime: 300
    }
  getSeconds = () => {
      return ('0'+ this.state.time%60).slice(-2);        
  }
  getMinutes = () => {
      return Math.floor(this.state.time/60);
  }
  moleSeconds = () => {
      return Math.floor(this.state.moletime/100);
  }
  moleMSeconds = () => {
      return ('0' + this.state.moletime%100).slice(-2);
  }
 
    timer = () => {
      this.setState(prevState => {
        const _this = this;
          const startTime = Date.now() - prevState.time;
          this.timer = setInterval(() => {
              if(_this.state.time>0){
            this.setState({ time: Math.ceil(120 - (Date.now() - startTime)/1000) });
          }
          }, 1000);
        
        return { running: !prevState.running };
        }
      )
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
          else if (count>0){
              count-=1;
              console.log(count);
              if(count !== 0){
              setTime = 50+150*Math.random();
              startTime =Date.now() - prevState.moletime;
              console.log(setTime);
              this.setState({moletime: setTime});
              }
              else {
                clearInterval(this.moleTimer)
            }
          }
          
          }, 100);
        
        return { mRunning: !prevState.mRunning };
        }
      )
    }
    render() {
      
      return (
        <div>
          <h1>{this.getMinutes()}:{this.getSeconds()}</h1>
          <button onClick={this.timer}>
            WHACK SOME MOLES
          </button>
          <h1>{this.moleSeconds()}:{this.moleMSeconds()}</h1>
          <button onClick={this.moleTimer}>
            {this.state.running ? 'Pause' : 'Start'}
          </button>
        </div>
      );
    }
  }


export default Stuff;

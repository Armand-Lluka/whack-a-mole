import React from 'react';
import Grid from '../grid/grid.js'

class Timers extends React.Component {
  
    state = {
      running: false,
      time: 120,
    }
  
  
  getSeconds = () => {
      return ('0'+ this.state.time%60).slice(-2);        
  }
  getMinutes = () => {
      return Math.floor(this.state.time/60);
  }
 
    timer = () => {
      this.setState(prevState => {
        console.log(this.child.moleTimer)
        const _this = this;
          const startTime = Date.now() - prevState.time;
          this.child.moleTimer();
          this.timer = setInterval(() => {
              if(_this.state.time>0){
            this.setState({ time: Math.ceil(120 - (Date.now() - startTime)/1000) });
          }
          else if (this.child.moleTimer) {
            console.log('works and id is', this.timer)
            clearInterval(this.child.moleTimer);
          }
          }, 1000);
        
        return { running: !prevState.running };
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
          <Grid ref={instance => { this.child = instance; }}/>
          
        </div>
      );
    }
  }


export default Timers;

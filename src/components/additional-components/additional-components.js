import React from 'react';
class Stuff extends React.Component {
    state = {
        seconds: 120
    };
    getSeconds = () => {
        return ('0'+ this.state.seconds%60).slice(-2);        
    }
    getMinutes = () => {
        return Math.floor(this.state.seconds/2);
    }
    render() {
        return (
            <div>
                <h1>{this.getSeconds()}:{this.getMinutes()}</h1>
                <button>Whack a Mole</button>
            </div>
        )
    }
}


export default Stuff;

import React from 'react'
import hammer from '../../../public/icons/hammer.svg'

class Grid extends React.Component {

    render(){
        return (
            
            <div class="grid-container">
                <div class="mole" id="box-1">1</div>
                <div class="mole" id="box-2">2</div>
                <div class="mole" id="box-3">3</div>
                <div class="mole" id="box-4">4</div>
                <div class="mole" id="box-5">5</div>
                <div id="box-6">6</div>
                <div id="box-7">7</div>
                <div id="box-8">8</div>
                <div id="box-9">9</div>
            </div>
          
        )
    }
}

export default Grid;
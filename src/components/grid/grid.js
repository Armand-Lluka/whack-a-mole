import React from "react";
import mole from "../../../public/icons/mole.jpg";
import hole from "../../../public/icons/hole.png";

class Grid extends React.Component {
  render() {
    return (
      <div class="grid-container">
        <div id="box-1">
          <div className="mole-hole">
            <img className="mole" src={mole} />
            <img src={hole} />
          </div>
        </div>
        <div id="box-2">
          <div className="mole-hole">
            <img className="mole" src={mole} />
            <img src={hole} />
          </div>
        </div>
        <div id="box-3">
          <div className="mole-hole">
            <img className="mole" src={mole} />
            <img src={hole} />
          </div>
        </div>
        <div id="box-4">
          <div className="mole-hole">
            <img className="mole" src={mole} />
            <img src={hole} />
          </div>
        </div>
        <div id="box-5">
          <div className="mole-hole">
            <img className="mole" src={mole} />
            <img src={hole} />
          </div>
        </div>
        <div id="box-6">
          <div className="mole-hole">
            <img className="mole" src={mole} />
            <img src={hole} />
          </div>
        </div>
        <div id="box-7">
          <div className="mole-hole">
            <img className="mole" src={mole} />
            <img src={hole} />
          </div>
        </div>
        <div id="box-8">
          <div className="mole-hole">
            <img className="mole" src={mole} />
            <img src={hole} />
          </div>
        </div>
        <div id="box-9">
          <div className="mole-hole">
            <img className="mole" src={mole} />
            <img src={hole} />
          </div>
        </div>
      </div>
    );
  }
}

export default Grid;

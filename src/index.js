//
import React from 'react';
import reactDOM from 'react-dom';
import style from '../public/style.css'
import Grid from './components/grid/grid'
import Stuff from './components/additional-components/additional-components'

const App = () => (

  
    <main>
    <h1>Whack a mole</h1> 
      <Stuff/> 
      
    </main>
    
  );

reactDOM.render(
    <App/>,
    document.getElementById('root')
  );
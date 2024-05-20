import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@fluentui/react-components';

import { makeStyles } from '@fluentui/react-components';

import { ShorthandPositions as Example } from './example';

import {StylingComponents, PositioningComponents} from './developer'
import Child from './complex/Child';
import Parent from './complex/Parent';
import SizeChange from './sizechange/SizeChange';
import { Counter } from './features/counter/Counter';

const useStyles = makeStyles({
  root: { color: 'red' },
});
function App() {

  const classes = useStyles();

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      {/* <Button appearance="primary">Get started</Button>
      <div className={classes.root} >

        aaa
      </div> */}
      {/* <Example /> */}
      {/* <StylingComponents/> */}
      {/* <PositioningComponents/> */}

      {/* <Parent childComponentType={Child} /> */}

      
      {/* <SizeChange/> */}

      <Counter/>

    </>
  );
}

export default App;

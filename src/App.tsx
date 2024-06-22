import React from 'react';
import {CatFact} from "./CatFact"
import './App.css';
import DummyData from "./DummyData";
import GithubApi from "./GithubApi";

function App() {


  return (
    <div>
       {/*<CatFact/>*/}
       {/* <DummyData/>*/}
        <GithubApi/>
    </div>
  );
}

export default App;

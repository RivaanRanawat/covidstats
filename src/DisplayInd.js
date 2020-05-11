import React,{Component} from 'react';
import './App.css';

class DisplayInd extends Component {
  render() {
    return (

    <div id="indbox">

      <h1 class="title">COVID-19</h1>

  <h2 class="subtitle">India Corona Virus Stats</h2>

  <div class="noContainer">

  <div class="firstContainer">
      <h4>Country</h4>
      <h1 id="country">India 🇮🇳</h1>
      <h4>Population</h4>
      <h1 id="population"></h1>
      <h4>Population Death %</h4>
      <h1 id="totdeathper"></h1>
    </div>

    
    <div class="secondContainer">

      <h4>Cases</h4>
      <h1 id="cases"></h1>
      <h4>Deaths</h4>
      <h1 id="deaths"></h1>
      <h4>Case Death %</h4>
      <h1 id="casedeathper"></h1>
    </div>
    
  </div>
    </div>
  );
  }
}

export default DisplayInd;

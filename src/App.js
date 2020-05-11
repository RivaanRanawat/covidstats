import React,{Component} from 'react';
import Stats from './Stats.js'
import DisplayInd from './DisplayInd.js'
import './App.css';


class App extends Component {
  render() {
    return (
    <div className="App">
      <DisplayInd/>
      <button type="button" class="btn btn-primary btn-lg">🌞</button>
    </div>
  );
  }
}

export default App;

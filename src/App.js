import logo from './logo.svg';
import './App.css';
import Panel from './Components/Panel';

function App(props) {
  return (
    <div className="App">
      <Panel store={props.store} />
    </div>
  );
}

export default App;

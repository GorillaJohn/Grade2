import './App.css';
import Tools from './Components/Tools'

function App(props) {
  return (
    <div className="App">
      <Tools store={props.store} />
    </div>
  );
}

export default App;

import './App.css';
import Nav from './component/Nav'
import Body from './component/Body'
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
    <Nav />
    <Body data={props.data} />
      </header>
    </div>
  );
}

export default App;

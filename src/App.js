import logo from './logo.svg';
import './App.css';
import Table from "./components/Table";
import data from "./data.json";


function App() {
  return (
    <div className="container">
      <div className='row justify-content-center'>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Table data={data} printBtn={true}/>
    </div>
  );
}

export default App;

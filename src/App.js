// import logo from './logo.svg';
import './App.css';
import Table from "./components/Table";
import data from "./data.json";


function App() {



  return (
    <div className="container">
      <div className='row'>
        <h1 className='text-center'>HALAN APP</h1>
      </div>
      <Table data={data} printBtn={true}/>
    </div>
  );
}

export default App;

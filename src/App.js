// import logo from './logo.svg';
import './App.css';
import Table from "./components/Table";
import data from "./data.json";
import jsPDF from 'jspdf';
import 'jspdf-autotable'

function App() {

  const printHandler = () =>{
    // window.print()
    const pdfDoc = new jsPDF()
    pdfDoc.text("HALAN APP", 20, 10)
    pdfDoc.autoTable({ html: '#table2PDF' })
    // pdfDoc.save("Halan_Table.pdf")
    pdfDoc.autoPrint();
    pdfDoc.output('dataurlnewwindow');
  }

  return (
    <div className="container">
      <div className='row'>
        <h1 className='text-center'>HALAN APP</h1>
      </div>
      <div className='row justify-content-end'>
        <button className='col-md-2 col my-2 btn btn-info text-white' onClick={printHandler}>Print PDF</button>
      </div>
      <Table data={data}/>
    </div>
  );
}

export default App;

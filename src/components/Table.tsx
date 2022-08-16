import React from 'react'
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

type Address = string

type Customer = {
  "name": string,
  "age": number,
  "address": Address,
  "date": string,
  "email": string
}

type Props = {
  data: {
    customers: Array<Customer>
  },
  printBtn: boolean,
}

export default function Table({data, printBtn}:Props) {

  const printHandler = () =>{
    // window.print()
    const pdfDoc = new jsPDF()
    pdfDoc.text("HALAN APP", 20, 10)
    // pdfDoc.autoTable({ html: '#table2PDF' })
    autoTable(pdfDoc, { html: '#table2PDF' });
    // pdfDoc.save("Halan_Table.pdf")
    pdfDoc.autoPrint();
    pdfDoc.output('dataurlnewwindow');
  }

  const customers = data.customers;
  const headers = Object.keys(customers[0]);
  return (
    <div>
      {
        printBtn &&
        <div className='row justify-content-end'>
          <button className='col-md-2 col my-2 btn btn-info text-white' onClick={printHandler}>Print PDF</button>
        </div>
      }
      <div className='row'>
        <table className="table table-dark table-striped" id="table2PDF" data-testid="table2PDF">
          <thead>
            <tr>
              <th scope="col">#</th>
              {
                headers.map(header =><th key={header} scope="col">{ header.toUpperCase() }</th>)
              }
            </tr>
          </thead>
          <tbody>
            {
              customers.map((customer, i) =>{
              return (
                <tr key={i}>
                  <th scope="row">{i+1}</th>
                  {
                    headers.map(header => {
                      if(header === "date"){
                        return(<td key={header+i}>{ new Date(customer[header]).toDateString() }</td>)
                      }
                      else{
                        return(<td key={header+i}>{ customer[header as keyof Customer] }</td>)
                      }
                    })
                  }
                </tr>
              )})
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

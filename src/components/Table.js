import React from 'react'

export default function Table(props) {
  const customers = props.data.customers;
  const headers = Object.keys(customers[0]);
  return (
    <div className='row'>
      <table className="table table-dark table-striped">
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
                      return(<td>{ new Date(customer[header]).toDateString() }</td>)
                    }
                    else{
                      return(<td>{ customer[header] }</td>)
                    }
                  })
                }
              </tr>
            )})
          }
        </tbody>
      </table>
    </div>
  )
}
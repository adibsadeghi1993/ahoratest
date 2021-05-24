import React from 'react'
import "./invoice.css"

const Invoice = () => {
    return (
        <div>
           <div className="subheader">
           <h1 className="invoice">Invoice</h1>
            <h1>Logo</h1>
           </div>

           <div className="main">
               <div className="from">
                   <p>John Smith</p>
                   <p>name@company.come</p>
                   <p>12 company street</p>
                   <p>12 street</p>
                   <p>country</p>
                   <p>p.604331456</p>
               </div>
               <div className="for">
               <p>Client name</p>
                   <p>name@company.come</p>
                   <p>34 customer street</p>
                   <p>city</p>
                   <p>country</p>
               </div>
           </div>
           
        </div>
    )
}

export default Invoice

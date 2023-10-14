import React from 'react'
import "./table.css"

export default function table() {
  return (
    <>
    <div className='container'>

    <table className='table cus'>
        <thead>
            <tr>
                <th>Invoice ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Payable Amount</th>
                <th>Paid Amount</th>
                <th>Due</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>#AHGA68</td>
                <td>2023-10-01</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$000</td>
            </tr>
            <tr>
                <td>#AHGA68</td>
                <td>2023-10-05</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$000</td>
            </tr>
            <tr>
                <td>#AHGA68</td>
                <td>2023-10-10</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$000</td>
            </tr>
            <tr>
                <td>#AHGA68</td>
                <td>2023-10-15</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$000</td>
            </tr>
            <tr>
                <td>#AHGA68</td>
                <td>2023-10-20</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$000</td>
            </tr>
            <tr>
                <td>#AHGA68</td>
                <td>2023-10-25</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$000</td>
            </tr>
            <tr>
                <td>#AHGA68</td>
                <td>2023-10-30</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$000</td>
            </tr>
            <tr>
                <td>#AHGA68</td>
                <td>2023-11-01</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$000</td>
            </tr>
            <tr>
                <td>#AHGA68</td>
                <td>2023-11-05</td>
                <td>Jacob Marcus</td>
                <td>$100</td>
                <td>$000</td>
                <td>$000</td>
            </tr>
        </tbody>
    </table>
    </div>
    </>
  )
}

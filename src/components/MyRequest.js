import React, { useState } from 'react';

function MyRequest() {
  const [actions, setActions] = useState([
    'Pending', 'Rejected', 'Approved'
  ]);

  return (
    <div>
      <h1 className='tableTitle'>My request</h1>
      <table className="table-container">
        <thead>
          <tr>
            <th>Req Date</th>
            <th>Description</th>
            <th>Specification</th>
            <th>Packing</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>02/03/2022</td>
            <td>Computer labs equipment</td>
            <td>Projector</td>
            <td>PCs</td>
            <td>2</td>
            <td>2000000</td>
            <td>4000000</td>
            <td>
              <select>
                {actions.map((action, index) => (
                  <option key={index} value={action}>
                    {action}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>02/03/2023</td>
            <td>Computer labs equipment</td>
            <td>Projector</td>
            <td>PCs</td>
            <td>2</td>
            <td>2000000</td>
            <td>4000000</td>
            <td>
              <select>
                {actions.map((action, index) => (
                  <option key={index} value={action}>
                    {action}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>02/03/2022</td>
            <td>Computer labs equipment</td>
            <td>Projector</td>
            <td>PCs</td>
            <td>2</td>
            <td>2000000</td>
            <td>4000000</td>
            <td>
              <select>
                {actions.map((action, index) => (
                  <option key={index} value={action}>
                    {action}
                  </option>
                ))}
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MyRequest;

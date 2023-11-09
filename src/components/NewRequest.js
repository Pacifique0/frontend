import React, { useState, useEffect } from 'react';
function NewRequest(){
    const [date, setDate] = useState('');
  const [department, setDepartment] = useState('');
  const [PayeeName, setPayeeName] = useState('');
  const [PayeeBank, setPayeeBank] = useState('');
  const [PayeeBankAcount, setPayeeBankAcount] = useState('');
  const [budget, setBudget] = useState('');
  const [budgetOptions, setBudgetOptions] = useState([]);

  /// validating and adding new inputs
  
    return <>
        
        <div>
      <h1 className='tableTitle'>New request</h1>
      <form className="budgetForm">
        <h2>Department Information</h2>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} /><br/><br/>

        <label htmlFor="department">Department Name:</label>
        <input type="text" id="department" name="department" value={department} onChange={(e) => setDepartment(e.target.value)} /><br/><br/>
        <label htmlFor="Payee">Payee Name:</label>
        <input type="text" id="Payee" name="Payee" value={PayeeName} onChange={(e) => setPayeeName(e.target.value)} /><br/><br/>
        <label htmlFor="PayeeBank">Payee Bank:</label>
        <input type="text" id="PayBank" name="PayBank" value={PayeeBank} onChange={(e) => setPayeeBank(e.target.value)} /><br/><br/>
        <label htmlFor="PayeeBank">Payee Acount:</label>
        <input type="text" id="PayBank" name="PayBankAcount" value={PayeeBankAcount} onChange={(e) => setPayeeBankAcount(e.target.value)} /><br/><br/>

        <label htmlFor="budget">Budget:</label>
        <select className="budgetSelect" value={budget} onChange={(e) => setBudget(e.target.value)}>
          <option className="budgetSelectOption" value="">Select budget</option>
          {budgetOptions.map(option => (
            <option className="budgetSelectOption" key={option.id} value={option.id}>
              {option.amount}
            </option>
          ))}
            </select>
        </form>

    
    <form>
        <h2 className='tableTitle'>Item List and Management</h2>
        <table border="1" className="itemsTable">
            <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Specification</th>
                <th>Packing Quantity</th>
                <th>Unit Price</th>
                <th>Total Price</th>
                <th>Comments</th>
                <th>Actions</th>
            </tr>
            <tr>
                <td><input type="text" id="id" name="id"/></td>
                <td><textarea rows='5' cols='20' id="description" placeholder="Enter Description" name="description" ></textarea></td>
                <td><textarea rows='5' cols='20' id="specification" placeholder="Enter Specification" name="specification"></textarea></td>
                <td><input type="number" id="packingQuantity" placeholder="Enter Quantity" name="packingQuantity"/></td>
                <td><input type="number" id="unitPrice" placeholder="Enter Unit Price" name="unitPrice"/></td>
                <td><input type="number" id="totalPrice" placeholder="Enter Total Price" name="totalPrice"/></td>
                <td><textarea rows='5' cols='20' id="comments" placeholder="Enter comments for the items" name="comments"></textarea></td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
            
        </table>
    </form>


</div>
</>
}
export default NewRequest
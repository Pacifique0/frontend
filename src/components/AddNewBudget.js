import React, { useState } from 'react';

function AddNewBudget(){
    const [itemName, setItemName] = useState('');
  const [amount, setAmount] = useState('');
  const handleAddBudgetItem =  () => {
    
  };

    return <div>
    <h1>Add Budget Item</h1>
    <label>Item: </label>
    <input
      type="text"
      placeholder="Item Name"
      value={itemName}
      onChange={(e) => setItemName(e.target.value)}
    /><br/><br></br>
    <label>Amount: </label>
    <input
      type="number"
      placeholder="Amount"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
    /><br/><br/>
    <button onClick={handleAddBudgetItem}>Add Item</button>
  </div>
}
export default AddNewBudget

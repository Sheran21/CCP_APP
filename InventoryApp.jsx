import React, { useState } from "react";
import { format } from "date-fns";
import { Plus, Save } from "lucide-react";

export default function InventoryApp() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [inventory, setInventory] = useState([]);
  const [newItemName, setNewItemName] = useState("");

  const handleAddItem = () => {
    if (!newItemName) return;
    setInventory([
      ...inventory,
      {
        name: newItemName,
        weight: "",
        stockQty: "",
        maxQty: "",
        unitPrice: "",
        reorder: "",
        vendor: "",
        storage: "",
        date: format(selectedDate, "yyyy-MM-dd"),
      },
    ]);
    setNewItemName("");
  };

  const handleChange = (index, field, value) => {
    const updated = [...inventory];
    updated[index][field] = value;
    setInventory(updated);
  };

  const saveData = () => {
    console.log("Saved inventory:", inventory);
    alert("Inventory saved! (Simulated in console)");
  };

  return (
    <>
      <header>Ceylon Curry Pot – Inventory Tracker</header>

      <div className="date-picker">
        <label>Select Date:</label>
        <input
          type="date"
          value={format(selectedDate, "yyyy-MM-dd")}
          onChange={(e) => setSelectedDate(new Date(e.target.value))}
        />
      </div>

      <div className="add-item-section">
        <input
          type="text"
          placeholder="Add New Item"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button onClick={handleAddItem}>
          <Plus size={16} style={{ marginRight: 4 }} />
          Add Item
        </button>
      </div>

      <table className="inventory-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Weight (g)</th>
            <th>Stock Qty</th>
            <th>Max Qty</th>
            <th>Unit Price</th>
            <th>Reorder Level</th>
            <th>Vendor</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>
                <input
                  value={item.weight}
                  onChange={(e) => handleChange(index, "weight", e.target.value)}
                />
              </td>
              <td>
                <input
                  value={item.stockQty}
                  onChange={(e) => handleChange(index, "stockQty", e.target.value)}
                />
              </td>
              <td>
                <input
                  value={item.maxQty}
                  onChange={(e) => handleChange(index, "maxQty", e.target.value)}
                />
              </td>
              <td>
                <input
                  value={item.unitPrice}
                  onChange={(e) => handleChange(index, "unitPrice", e.target.value)}
                />
              </td>
              <td>
                <input
                  value={item.reorder}
                  onChange={(e) => handleChange(index, "reorder", e.target.value)}
                />
              </td>
              <td>
                <input
                  value={item.vendor}
                  onChange={(e) => handleChange(index, "vendor", e.target.value)}
                />
              </td>
              <td>
                <input
                  value={item.storage}
                  onChange={(e) => handleChange(index, "storage", e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="save-btn" onClick={saveData}>
        <Save size={16} style={{ marginRight: 4 }} />
        Save Inventory
      </button>
    </>
  );
}

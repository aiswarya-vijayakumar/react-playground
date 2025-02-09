import { useState } from "react";
import "../App.css";
import { FaTrash } from "react-icons/fa";
function Todo() {
  const initialList = [
    { id: 1, name: "Buy groceries" },
    { id: 2, name: "Meeting with stakeholders" },
    { id: 3, name: "soccer practice" },
  ];
  const [todoList, setItem] = useState(initialList);
  const addItem = () => {
    setItem([...todoList, { id: todoList.length + 1, name: newItem }]);
    setNewItem("");
  };
  const [newItem, setNewItem] = useState("");
  const deleteItem = (id) => {
    setItem(todoList.filter((item) => item.id != id));
  };
  const onInputChange = (e) => {
    if (e.target.value?.trim()) {
      setNewItem(e.target.value);
    } else {
      setNewItem("");
    }
  };
  return (
    <div className="card-outer-container">
      <div className="card-container">
        <div className="add-item-container">
          <input
            placeholder="Enter a task....."
            value={newItem}
            onChange={onInputChange}
          ></input>
          <button disabled={!newItem} className="add-btn" onClick={addItem}>
            Add
          </button>
        </div>

        <h4 style={{ textAlign: "center" }}>Simple Todo App</h4>
        <ul style={{ padding: 0 }}>
          {todoList.map((item) => (
            <li className="todo-item">
              <input type="checkbox" id={item.id}></input>
              <button className="todo-btn" key={item.id}>
                {item.name}
              </button>
              <FaTrash
                style={{ cursor: "pointer" }}
                className="delete-icon"
                onClick={() => deleteItem(item.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;

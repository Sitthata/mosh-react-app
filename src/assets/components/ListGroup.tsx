import { useState } from "react";
import { MouseEvent } from "react";

function ListGroup() {
  const items = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Philadelphia",
  ];

  // Hooks
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event Handler
  const handleClick = (e: MouseEvent) => {
    console.log(e);
  };

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && "There are no items in the list."}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

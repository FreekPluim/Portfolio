import { useState } from "react";

interface ListGroupProps {
  header: string;
  items: string[];

  onSelectItem: (item: string) => void;
}

function ListGroup({ items, header, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getNoListFound = (problem: string) => {
    return items.length === 0 ? <p>error occured: {problem}</p> : null;
  };

  const changeSelected = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <h1>{header}</h1>
      {getNoListFound("List was empty")}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              changeSelected(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

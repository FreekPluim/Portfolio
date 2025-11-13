import ListGroup from "./components/ListGroup";

function App() {
  let items = ["One", "Two", "Three", "NO"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        header="Numbers"
        items={items}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;

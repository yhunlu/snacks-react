import ListGroup from './components/ListGroup';

const App = () => {
  //   only city names of america
  const items = ['New York', 'San Francisco', 'Los Angeles', 'Chicago'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
};

export default App;

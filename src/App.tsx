import ListGroup from './components/ListGroup';

const App = () => {
  //   only city names of america
  const items = ['New York', 'San Francisco', 'Los Angeles', 'Chicago'];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
};

export default App;

import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello Cinema!</h1>
      <Button variant="secondary" disabled>
        Hello Button
      </Button>
    </div>
  );
}

export default App;

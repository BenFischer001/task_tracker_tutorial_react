import Header from "./components/Header";

function App() {
  const x = false
  return (
    <div className="App">
      <Header title = 'Hello'></Header>
      <h1>Hello {x ? 'True': 'False'}</h1>
    </div>
  );
}

export default App;

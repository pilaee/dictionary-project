import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
    <div className="container">
      <header className="App-header">
      Find your word 🕮
      </header>
      <main>
      <Dictionary defaultKeyword="wine"/>
      </main>
      <footer className="App-footer">
      <small> Coded by Pollina Iliev</small>
      </footer>
      </div>
    </div>
  );
}


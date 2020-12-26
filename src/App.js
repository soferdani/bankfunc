import logo from './logo.svg';
import './App.css';
import Operation from './components/Operation'
import Transaction from './components/Transaction'
import Transactions from './components/Transactions'

function App() {
  return (
    <div className="App">
      <Operation />
      <Transaction />
      <Transactions/>
    </div>
  );
}

export default App;

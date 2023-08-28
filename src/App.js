import logo from './logo.svg';
import './App.css';
import WalletProvider from './context/walletContext';

function App() {
  return (
    <div className="App">
      <WalletProvider/>
    </div>
  );
}

export default App;

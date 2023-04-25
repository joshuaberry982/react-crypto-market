import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import CoinTable from './components/CoinTable';

function getCurrentYear() {
  return new Date().getFullYear();
}

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <CoinTable />
      <footer>
        <p>&#169;Copyright <a href='https://github.com/joshuaberry982' target='_blank'>JB Web Design</a> {getCurrentYear()}</p>
        <p>View the source code for this portfolio <a href='https://github.com/joshuaberry982/react-crypto-market' target='_blank' className='link'>here</a></p>
      </footer>
    </div>
  )
}

export default App

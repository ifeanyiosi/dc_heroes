
import './App.css';
import DataFetching from './components/DataFetching';
import Navbar from './components/Navbar';
import Main from './Main';

function App() {
  return (
    <div className="App ">
      <Navbar />
      {/* <Main /> */}
      <DataFetching />
    </div>
  );
}

export default App;

import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import DetailPages from './pages/DetailPages';

function App() {
  return (
    <div className="App">
        <Navbar/>
        {/* <Homepage/> */}
        <DetailPages/>
    </div>
  );
}

export default App;
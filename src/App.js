import './App.css';
// import London from './assets/tower-bridge.avif';
import Data from './data.js';
import Card from './components/Card';
import Globe from './assets/globe.png';

const info = Data;

function App() {
  return (
    <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 shadow-2xl ">
      <div className="p-6 bg-red-500 rounded-lg flex justify-center font-Inter font-extrabold text-lg shadow-lg">
        <img src={Globe} className="h-8 w-8 " alt="world" />{' '}
        <span className="p-1 ml-1">My travel journey!</span>
      </div>
      <Card {...info} />
    </div>
  );
}

export default App;

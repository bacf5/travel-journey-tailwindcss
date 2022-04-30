import './App.css';
import London from './assets/tower-bridge.avif';
import Data from './data.js';

console.log(Data);
function App() {
  return (
    <div className="text-center">
      HOLA GENTUSA{' '}
      <img src={London} alt="tower-bridge" height={640} width={640} />
    </div>
  );
}

export default App;

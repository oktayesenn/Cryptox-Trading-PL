import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import './App.css';
import Stats from './components/Stats';
import Newsfeed from './components/Newsfeed';




function App() {
  return (
    <div>
    <div className="app__header">
      <Header />
    </div>
    <div className="app__body">
      <div className="app__sidebar">
        <Newsfeed />
        {/* Stats */}
        <Stats />
      </div>
    </div>
    </div>
  );
}


export default App;

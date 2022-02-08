import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import LatestRelease from './components/LatestRelease'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'

function App() {
  return (
    <div>
     <MyNav />
     <Welcome />
     <LatestRelease />
     <MyFooter />

    </div>
  );
}

export default App;

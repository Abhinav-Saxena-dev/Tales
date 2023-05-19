import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage/homepage.component';
import Header from './Components/Header/header.component';

const App = () => {
  return (
    <div>
      <Header/>
      <HomePage/>
    </div>
  );
}

export default App;

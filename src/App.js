import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav/Nav';
import Header from './Component/Header/Header';
import Catagory from './Component/Catagory/Catagory';
import Feature from './Component/Feature/Feature';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Header></Header>
      <Catagory></Catagory>
      <Feature></Feature>
    </div>
  );
}

export default App;

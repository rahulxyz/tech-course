import './App.css';
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import Login from 'pages/login/Login';


function App() {
  return (
    <div className="App">
      <Header />
        <Login/>
      <Footer />
    </div>

  );
}

export default App;

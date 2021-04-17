import './App.css';
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import Login from 'pages/login/Login';
import {Switch, Route} from "react-router-dom";
import Home from 'pages/home/Home';
import Article from 'pages/article/Article';

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route path="/article/:id" component={Article}/>
          <Route path="/home" component={Home}/>
          <Route path="/" component={Login}/>
        </Switch>
      <Footer />
    </div>

  );
}

export default App;

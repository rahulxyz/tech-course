import React from 'react';
import './App.css';
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import Login from 'pages/login/Login';
import {Switch, Route} from "react-router-dom";
import Home from 'pages/home/Home';
import Article from 'pages/article/Article';

function App() {
  const [addModal, setAddModal] = React.useState(false);

  const toggleAdd = (show) =>{
    setAddModal(show);
  }

  console.log(">>p ", addModal);

  return (
    <div className="App">
      <Header toggleAdd={toggleAdd} />
        <Switch>
          <Route path="/article/:id" component={Article}/>
          <Route path="/home" render={()=><Home addModal={addModal} toggleAdd={toggleAdd} /> }/>
          <Route path="/" component={Login}/>
        </Switch>
      <Footer />
    </div>

  );
}

export default App;

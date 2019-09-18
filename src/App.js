import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Toasters from "./Toasters/Toasters";
import Toaster from './Toasters/Toaster';
import HomePage from './Gaje/HomePage';
import Home from './Homepage/Home';



const client = new ApolloClient({
  uri: 'https://gaje.paulmitchell.edu/graphql',
})


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
      
        <div>
          <header>
            <h1>Welcome to Gajes test site</h1>
          </header>
          {/* <div className="content"> */}
            
            <Route exact path="/" component={Home} />
            <Route path="/toasters"  component={Toasters} />
            <Route path="/toaster/:slug" component={Toaster} />
            <Route path="/gajespage" component={HomePage} />
            
          {/* </div> */}
        </div>

        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;

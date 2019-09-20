import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost'; //  Package containing everything we need to set up Apollo Client
import { ApolloProvider } from 'react-apollo'; //  Apollo Client view layer integration for React
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Toasters from "./Toasters/Toasters";
import Toaster from './Toasters/Toaster';
import Home from './Homepage/Home';
import GajesPicks from './Gajes Picks/GajesPicks';


// You can see that we’re creating a new client using Apollo and providing it with the URL endpoint to use for GraphQL requests. 
//We’re also wrapping our entire app in a new ApolloProvider and passing to it the client we created as the client prop. 
//The result of this is that we’ll now be able to use the react-apollo library to make GraphQL requests anywhere inside of our app.
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
            <Route path="/GajesPicks" component={GajesPicks} />
          {/* </div> */}
        </div>

        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;

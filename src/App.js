import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Toasters from "./Toasters/Toasters";
import Toaster from './Toasters/Toaster';



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
            <h1>Toaster Review Site</h1>
          </header>
          <div className="content">
            
            <Route exact path="/" component={Toasters} />
            <Route path="/toasters" exact component={Toasters} />
            <Route path="/toaster/:slug" exact component={Toaster} />
            
          </div>
        </div>

        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;

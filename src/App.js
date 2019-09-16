import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route } from 'react-router-dom';
import Years from './Years/Years';
import Year from './Years/Year';


const client = new ApolloClient({
  uri: 'https://gaje.paulmitchell.edu/graphql',
})


function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      
        <div>
          <header>
            <h1>Gajes Favorite Dead Shows by Year</h1>
          </header>
          <div className="conent">
            <Route exactpath="/" component={Years} />
            <Route path="/years" component={Years} />
            <Route path="/year/:slug" component={Year} />

          </div>
        </div>


      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
